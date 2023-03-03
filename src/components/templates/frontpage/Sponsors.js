function Sponsors(){
    return(
        <div className="w-full pt-0 md:pt-8 lg:pt-14 z-10 relative">
            <div className="xl:containerxl lg:containerlg md:containermd sm:containersm bgBlue py-20 px-12">
                <h2 className="text-center inter font-bold text-3xl text-white mb-8">Our Sponsors</h2>
                <div className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-2 lg:gap-[6rem] md:gap-[4rem]">
                    <img src="img/cLogo1.png" className="opacity-75 m-auto w-48 md:w-full mb-4" alt="sponsor"/>
                    <img src="img/cLogo2.png" className="opacity-75 m-auto w-48 md:w-full mb-4" alt="sponsor"/>
                    <img src="img/cLogo3.png" className="opacity-75 m-auto w-48 md:w-full mb-4" alt="sponsor"/>
                    <img src="img/cLogo4.png" className="opacity-75 m-auto w-48 md:w-full mb-4" alt="sponsor"/>
                    <img src="img/cLogo5.png" className="opacity-75 m-auto w-48 md:w-full mb-4" alt="sponsor"/>
                </div>
            </div>
        </div>
    )
}
export default Sponsors;