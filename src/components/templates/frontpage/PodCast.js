function PodCast(){
    return(
        <div className="w-full py-14 px-4 lg:px-0">
            <div className="xl:containerxl lg:containerlg md:containermd sm:containersm">
                <div className="flex flex-col lg:flex-row">
                    <h3 className="inter font-semibold text-2xl themeblack basis-full lg:basis-3/12 mb-8 md:mb-4  text-left md:text-center lg:text-left">Podcast Available On</h3>
                    <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 basis-full lg:basis-9/12 gap-6 md:gap-12 lg:gap-16 ml-0 lg:ml-16 mb-4">
                        <img src="img/brand1.png" className="w-60 md:w-full lg:w-full" alt="brand1"/>
                        <img src="img/brand2.png" className="w-60 md:w-full lg:w-full" alt="brand1"/>
                        <img src="img/brand3.png" className="w-60 md:w-full lg:w-full" alt="brand1"/>
                        <img src="img/brand4.png" className="w-40 md:w-full lg:w-full" alt="brand1"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PodCast;