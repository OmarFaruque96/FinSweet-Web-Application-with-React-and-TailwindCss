function Banner(){
    return(
        <div className="w-full py-28">   
            <div className="lg:containerlg md:containermd sm:containersm">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-16 align-center">
                    <div>
                        <h1 className="font-bold themeblack text-5xl inter leading-11 mb-6">Become The Hero Of Your Own Story</h1>
                        <p className="inter font-normal text-md themeblack leading-7 mb-7">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                        <form method="post" action="">
                            <input type="email" placeholder="Enter Your Email Id" className="bg-off-white inter py-3 px-8" />
                            <input type="submit" value="Subscribe" className="bgBlue text-white inter font-semibold py-3 px-8" />
                        </form>
                    </div>
                    <div>
                        <img src="img/banner.png" alt="bannerimage" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;