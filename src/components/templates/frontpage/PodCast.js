function PodCast(){
    return(
        <div className="w-full py-28">
            <div className="xl:containerxl lg:containerlg md:containermd sm:containersm">
                <div className="flex">
                    <h3 className="inter font-semibold text-2xl themeblack md:basis-3/12 sm:basis-full">Podcast Available On</h3>
                    <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 md:basis-9/12 gap-16 ml-16 sm:basis-full">
                        <img src="img/brand1.png" className="max-w-full" alt="brand1"/>
                        <img src="img/brand2.png" className="max-w-full" alt="brand1"/>
                        <img src="img/brand3.png" className="max-w-full" alt="brand1"/>
                        <img src="img/brand4.png" className="max-w-full" alt="brand1"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PodCast;