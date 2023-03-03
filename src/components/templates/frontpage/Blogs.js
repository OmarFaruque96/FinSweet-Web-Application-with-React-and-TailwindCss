import { Link } from "react-router-dom";
import BlogItem from '../blogpage/BlogItem';

function Blogs(){
    return(
        <div className="w-full py-14 px-4 md:px-0">
            <div className="xl:containerxl lg:containerlg md:containermd sm:containersm">
                <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4">
                    <div className="bg-[url('/img/articletitle.png')] bg-cover bg-top md:bg-center bg-no-repeat p-6 md:p-12">
                        <h3 className="inter font-semibold themeblack text-3xl mb-4">Read our <br/> articles & news</h3>
                        <Link to="/blog" className="inter font-semibold text-md text-[#503AE7] items-center hover:cursor-pointer">See More</Link>
                    </div>
                    <BlogItem/>
                    <BlogItem/>
                </div>
            </div>
        </div>
    )
}
export default Blogs;