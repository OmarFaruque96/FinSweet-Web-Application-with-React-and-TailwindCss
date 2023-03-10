import BlogItem from './templates/blogpage/BlogItem';
import NavBar from './templates/NavBar';
import Footer from './templates/Footer';
import Sponsors from './templates/frontpage/Sponsors';

function Blog(){
    return(
        <>
        <NavBar/>
        <div className="w-full py-14">
            <div className="xl:containerxl lg:containerlg md:containermd sm:containersm">
                <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                <BlogItem
                        title="Apparently we had reached a great height in the atmosphere, ..."
                        except="Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum."
                        thumbnail="img/blog1.png"
                />
                <BlogItem
                        title="Apparently we had reached a great height in the atmosphere, ..."
                        except="Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum."
                        thumbnail="img/blog2.png"
                />
                <BlogItem
                    title="Apparently we had reached a great height in the atmosphere, ..."
                    except="Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum."
                    thumbnail="img/blog1.png"
                />
                </div>
            </div>
        </div>
        <Sponsors/>
        <Footer />
        </>
        
    )
}
export default Blog;