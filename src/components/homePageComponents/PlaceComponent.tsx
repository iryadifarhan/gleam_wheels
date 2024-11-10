import { Places } from "../../dataUtils/IPlaces"

export function PlaceComponents(props: {place: Places}){
    return(
        <div key={props.place.name} className="flex bg-gradient-to-tr from-[#235999] to-[#3A94FF] text-white flex rounded-xl justify-between">
            <div className="textContainer py-1 px-2 ">
                <h2 className="text-xl font-semibold mb-2">{props.place.name}</h2>
                <div className="locationContainer flex gap-1">
                    <img className="max-h-4 mt-0.5" src="./src/assets/PinLocation.svg" alt="" />  
                    <p className="text-xs">{props.place.location}</p>
                </div>
                <div className="feature relative flex items-center gap-1 max-w-[max(40vw)]">
                    <p className="text-5xl font-bold text-[#232D40]">★</p>
                    <p className="absolute top-[1.3em] left-3 text-sm">{props.place.rating}</p>
                    <div className="flex gap-1 overflow-x-scroll no-scrollbar">
                        {props.place.features.map((it) => (<p key={it} className="text-nowrap text-[max(2.5vw)] bg-[#232D40] mt-3 p-1 rounded-xl">{it}</p>))}
                    </div>
                </div>
            </div>
            <img className="object-cover max-w-40 min-h-32 rounded-xl" src={props.place.imgSource} alt="" />
        </div>
    )
}