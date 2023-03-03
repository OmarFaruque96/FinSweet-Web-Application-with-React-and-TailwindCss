import { Link } from "react-router-dom";

function Footer(){
    return(
        <div>
            {/* footer top */}
            <div className="w-full pb-28 pt-44 bg-[#14142B] -mt-20 -z-10">
                <div className="xl:containerxl lg:containerlg md:containermd sm:containersm">
                    <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1">
                        <div>
                            <Link to="/"><img src="img/Brand.png" className="w-52" alt="logo"/></Link>
                        </div>
                        <div>
                            <h5 className="intel font-bold text-xl text-white mb-6">Pages</h5>
                            <ul>
                                <li className="inter font-normal text-md text-white mb-4"><Link to="/">Home</Link></li>
                                <li className="inter font-normal text-md text-white mb-4"><Link to="/">PodCast</Link></li>
                                <li className="inter font-normal text-md text-white mb-4"><Link to="/">Host</Link></li>
                                <li className="inter font-normal text-md text-white mb-4"><Link to="/">Blog</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="intel font-bold text-xl text-white mb-6">Reach Us</h5>
                            <ul>
                                <li className="inter font-normal text-md text-white mb-4"><Link to="/">Contact</Link></li>
                                <li className="inter font-normal text-md text-white mb-4"><Link to="/">About</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="intel font-bold text-xl text-white mb-6">Subscribe</h5>
                            <ul>
                                <li><Link to="/"><img src="img/apple.png" className="w-52 mb-6" alt="brand1"/></Link></li>
                                <li><Link to="/"><img src="img/google.png" className="w-48 mb-6" alt="brand1"/></Link></li>
                                <li><Link to="/"><img src="img/Soundcloud.png" className="w-40 mb-6" alt="brand1"/></Link></li>
                                <li><Link to="/"><img src="img/Spotify.png" className="w-32 mb-6" alt="brand1"/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>   
            </div>
            {/* footer bottom */}
            <div className="w-full py-4 bg-[#503AE7]">
                <div className="xl:containerxl lg:containerlg md:containermd sm:containersm">
                    <p className="text-center text-white inter text-md font-semibold">© Copyright Finsweet 2021</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;