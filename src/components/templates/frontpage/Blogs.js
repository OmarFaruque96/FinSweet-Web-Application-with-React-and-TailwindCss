import { Link } from "react-router-dom";
import BlogItem from '../blogpage/BlogItem';

function Blogs(){
    return(
        <div className="w-full py-14 px-4 lg:px-0">
            <div className="xl:containerxl lg:containerlg md:containermd sm:containersm">
                <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4">
                    <div className="bg-[url('/img/articletitle.png')] bg-cover bg-top md:bg-center bg-no-repeat p-6 md:p- lg:p-12">
                        <h3 className="inter font-semibold themeblack text-3xl mb-4">Read our <br/> articles & news</h3>
                        <Link to="/blog" className="inter font-semibold text-md text-[#503AE7] items-center hover:cursor-pointer hover:underline hover:decoration-2">See More</Link>
                    </div>

                    {/* better to read from a json file or db and pass the json data as props */}
                    <BlogItem
                        title="Getting the first 100 customers for your business"
                        except="Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum."
                        thumbnail="img/blog1.png"
                    />
                    <BlogItem
                        title="Apparently we had reached a great height in the atmosphere, ..."
                        except="Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum."
                        thumbnail="img/blog2.png"
                    />
                </div>
            </div>
        </div>
    )
}
export default Blogs;