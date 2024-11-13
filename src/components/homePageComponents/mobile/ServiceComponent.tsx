import { Service } from "../../../dataUtils/IService";
import { Pricing } from "../../universal/PricingDollar";

export function ServiceComponent(props: {service: Service, isFirst: boolean, isLast: boolean}) {
    return(
        <div key={props.service.title} className={`${props.isFirst == true ? 'ms-5' : ''} ${props.isLast == true  ? 'me-5' : ''} service bg-gradient-to-tr from-[#235999] to-[#3A94FF] text-white flex max-w-52 rounded-xl relative overflow-y-visible shadow-lg`}>
            <div className="textContent p-2 pe-1">
                <h1 className="text-lg font-medium w-[min(22vw)]">{props.service.title}</h1>
                <div className="container flex flex-col gap-2 mt-2">
                    <hr className="border"/>
                    <div className="duration flex gap-2 items-center">
                        <img className="max-w-6" src="./src/assets/Clock.png" alt="" />
                        <p>~{props.service.duration}</p>
                    </div>
                    <hr className="border"/>
                    <div className="duration flex gap-1.5 items-center">
                        <img className="max-w-6" src="./src/assets/WalletLogo.png" alt="" />
                        <Pricing level={props.service.pricing} amountStars={5} />
                    </div>
                    <hr className="border"/>
                </div>
            </div>
            <div className="imageContainer">
                <img className="object-cover h-full max-w-24 min-h-52 rounded-xl" src={props.service.imgSource} alt="" />
            </div>
            <div className="absolute bottom-2 left-2 rounded-full bg-[#232D40] size-8  align-top flex items-center justify-center text-white rounded-full text-2xl font-bold">
                <span className="flex items-center justify-center">&gt;</span>
            </div>
        </div>
    )
}