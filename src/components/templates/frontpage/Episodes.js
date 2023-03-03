import { Link } from "react-router-dom";
import EpisodeItem from "../episodepage/EpisodeItem";
function Episodes(){
    return(
        <div className="w-full py-14 md:py-0 lg:py-14 px-4 md:px-4 lg:px-0">
            <div className="xl:containerxl lg:containerlg md:containermd sm:containersm">
                <div className="flex justify-between items-end">
                    <div className="basis-full md:basis-1/2 lg:basis-2/6">
                        <h3 className="inter font-semibold themeblack text-3xl mb-4">Recent Episodes</h3>
                        <p className="inter text-md themeblack">Apparently we had reached a great height in the atmosphere, for the sky was a dead black.</p>
                    </div>
                    <div className="hidden md:block">
                        <Link to="/episode"><button className="bgBlue text-white inter font-normal py-3 px-8 hover:cursor-pointer hover:bg-[#14142B]" >See All Episodes</button></Link>
                    </div>
                </div>

                <EpisodeItem 
                limit = "3"
                />

                    <div className="block md:hidden">
                        <Link to="/episode"><button className="bgBlue text-white inter font-normal py-3 px-8 hover:cursor-pointer hover:bg-[#14142B]" >See All Episodes</button></Link>
                    </div>
                 
            </div>
        </div>
    )
}
export default Episodes;