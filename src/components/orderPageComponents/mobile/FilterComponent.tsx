import FilterLogo from "../../../assets/FilterLogo";

export function FilterComponent() {
    const filters = ["Terdekat", "Rating tertinggi", "Polishing", "Detailing", "Undercarriage"]

    return(
        <>
        <div className="flex overflow-x-scroll items-center h-10 gap-2 my-3 no-scrollbar">
            <FilterLogo classProperty={"ms-5 bg-[#232D40] object-contain h-full w-auto max-w-[max(10vw)] aspect-square px-[max(2.5vw)] rounded-xl shrink-0"} />
            {filters.map((it, index) => 
                (<div key={index} className={`${index == filters.length - 1 ? "me-5" : ""} bg-[#232D40] flex items-center h-full p-1.5 rounded-xl text-white text-[max(3.5vw)] font-medium px-[max(2.5vw)] shrink-0`}>
                    {it}
                </div>)
            )}
        </div>
        </>
    )
}