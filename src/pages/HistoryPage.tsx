import { useEffect, useState } from "react";
import { MobileBody } from "../components/historyPageComponents/mobile/MobileBody";
import { TopHeader } from "../components/historyPageComponents/mobile/TopHeader";
import { Navbar } from "../components/universal/Navbar";
import { User } from "../dataUtils/IUser";
import { LoadingSpinner } from "../assets/LoadingSpinner";
import Api from "../api";
import Book from "../dataUtils/IBook";
import { useNavigate } from "react-router-dom";
import { Places } from "../dataUtils/IPlaces";

export function HistoryPage(props: {isMobile: boolean, user: User, isLoading:boolean, isLogged:boolean, places:Places[]}) {
   const [bookLists, setBookList] = useState<Book[]>([])
   const [pendingBookList, setPendingBookList] = useState(true)
   const navigate = useNavigate()

   if (!props.isLogged) {
      // Navigate to the home page, then to the login page
      navigate(-1);
      setTimeout(() => navigate("/login", { replace: true }), 0); // Delayed navigation to ensure it hits "/"
      return null; // Prevent rendering during navigation
  }

   useEffect(() => {
      const fetchBookList = async () => {
         try {
            console.log(props.user.email)
             const response = await Api.get(`/api/getbooklist/user/${props.user.username}`)
             setBookList(response.data.data)
         } catch (error) {
             console.error(error)
         } finally {
             setPendingBookList(false)
         }
     }

     if(!props.isLoading) {
         fetchBookList()
     }
   }, [props.isLoading])

   if(props.isLoading || pendingBookList) {
      return(
         <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
            <LoadingSpinner />
         </div>
      )
   }

     return(
        props.isMobile
        ?
        <>
        <TopHeader />
        <MobileBody places={props.places} bookLists={bookLists}/>
        <Navbar isMobile={props.isMobile} />
        </>
        :
        <>
        <Navbar isMobile={props.isMobile} />
        <p>History page desktop</p>
        </>
     )
}