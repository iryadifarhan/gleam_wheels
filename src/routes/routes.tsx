//import react router dom
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { OrderPage } from "../pages/OrderPage";
import { HistoryPage } from "../pages/HistoryPage";
import { ProfilePage } from "../pages/ProfilePage";
import { getServiceDatas } from "../dataUtils/getServiceDatas";
import { useEffect, useState } from "react";
import { Places } from "../dataUtils/IPlaces";
import { Service } from "../dataUtils/IService";
import { User } from "../dataUtils/IUser";
import Api from "../api";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { PlaceDetailPage } from "../pages/PlaceDetailPage";

function RoutesIndex(props: {isMobile: boolean}) {
    const[services, setServices] = useState<Service[]>([])
    const[places, setPlaces] = useState<Places[]>([])
    const[user, setUser] = useState<User>({} as User);

    const[isUserNameChanged, setUserNameChanged] = useState(false)
    const[isLogged, setLog] = useState(false)
    const[isLoading, setLoading] = useState(true)
    const[dataUserPending, setUserPending] = useState(true)
    const[dataPlacePending, setPlacePending] = useState(true)

    // Update `isLoading` whenever pending states change
    useEffect(() => {
        if (!dataUserPending && !dataPlacePending) {
            setLoading(false);
            console.log("fetch data success")
        }
    }, [dataUserPending, dataPlacePending]);

    // Check user token and autologin
    useEffect(() => {
        const checkToken = async () => {
            const token = localStorage.getItem("authToken");
            if (token) {
                setLog(true);
                try {
                    const response = await Api.post(
                        "/api/users/autologin",
                        {},
                        { headers: { Authorization: `Bearer ${token}` } }
                    );
                    setUser(response.data.data);
                    console.log("mount user")
                } catch (error) {
                    console.error("Error fetching user data:", error);
                } finally {
                    setUserPending(false)
                }
            } else {
                setUserPending(false)
            }
        };

        checkToken();
    }, [isUserNameChanged]);

    // Fetch places data
    useEffect(() => {
        const fetchDataPlaces = async () => {
            try {
                const response = await Api.get("/api/places");
                setPlaces(response.data.data);
            } catch (error) {
                console.error("Error fetching places data:", error);
            } finally {
                setPlacePending(false);
            }
        };

        const initialServices = getServiceDatas();
        setServices(initialServices);
        fetchDataPlaces();
    }, []);

    return (
        <Routes>
            {/* route "/" */}
            <Route path="/" element={<HomePage isMobile={props.isMobile} services={services} places={places} 
            isLogged={isLogged} user={user} setLog={setLog} setUser={setUser} isLoading={isLoading} />} />  

            {/* route "/order" */}
            <Route path="/order" element={<OrderPage isMobile={props.isMobile} places={places} isLoading={isLoading}/>} />          
            
            {/* route "/order" */}
            <Route path="/place/detail/:placeName" element={<PlaceDetailPage places={places} isLoading={isLoading} user={user}/>}/>

            {/* route "/history" */}
            <Route path="/history" element={<HistoryPage isMobile={props.isMobile} user={user} isLoading={isLoading} isLogged={isLogged} places={places}/>} />          
            
            {/* route "/profile" */}
            <Route path="/profile" element={<ProfilePage isMobile={props.isMobile} isLogged={isLogged} isLoading={isLoading} user={user} setLog={setLog} setUser={setUser} isUserNameChanged={isUserNameChanged} setUserNameChanged={setUserNameChanged}/>} />          

            {/* route "/login" */}
            <Route path="/login" element={<LoginPage setLog={setLog} setUser={setUser} />} />          

            {/* route "/register" */}
            <Route path="/register" element={<RegisterPage setLog={setLog} setUser={setUser} />} />          
        </Routes>
    )
}




export default RoutesIndex