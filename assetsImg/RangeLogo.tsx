const RangeLogo = (props:{w: number, h:number, size:string}) => {
    return(
        <svg width="24" height="24" viewBox={`-1 0 ${props.w + 2} ${props.h - 1}`} fill="white" xmlns="http://www.w3.org/2000/svg" className={`text-[#3A94FF] ${props.size}`}>
        <path d="M1 11.5C1 12.8789 1.27159 14.2443 1.79926 15.5182C2.32694 16.7921 3.10036 17.9496 4.07538 18.9246C5.05039 19.8996 6.20791 20.6731 7.48182 21.2007C8.75574 21.7284 10.1211 22 11.5 22C12.8789 22 14.2443 21.7284 15.5182 21.2007C16.7921 20.6731 17.9496 19.8996 18.9246 18.9246C19.8996 17.9496 20.6731 16.7921 21.2007 15.5182C21.7284 14.2443 22 12.8789 22 11.5C22 10.1211 21.7284 8.75574 21.2007 7.48182C20.6731 6.20791 19.8996 5.05039 18.9246 4.07538C17.9496 3.10036 16.7921 2.32694 15.5182 1.79927C14.2443 1.27159 12.8789 1 11.5 1C10.1211 1 8.75574 1.27159 7.48182 1.79927C6.20791 2.32694 5.05039 3.10036 4.07538 4.07538C3.10036 5.05039 2.32694 6.20791 1.79926 7.48182C1.27159 8.75574 1 10.1211 1 11.5Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.16663 11.5C9.16663 12.1188 9.41246 12.7123 9.85004 13.1499C10.2876 13.5875 10.8811 13.8333 11.5 13.8333M9.16663 11.5C9.16663 10.8811 9.41246 10.2876 9.85004 9.85004C10.2876 9.41246 10.8811 9.16663 11.5 9.16663C12.1188 9.16663 12.7123 9.41246 13.1499 9.85004C13.5875 10.2876 13.8333 10.8811 13.8333 11.5M9.16663 11.5L1.29163 9.16663M11.5 13.8333C12.1188 13.8333 12.7123 13.5875 13.1499 13.1499C13.5875 12.7123 13.8333 12.1188 13.8333 11.5M11.5 13.8333V22M13.8333 11.5L21.7083 9.16663" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default RangeLogo