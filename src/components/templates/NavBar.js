import { Link } from "react-router-dom";
function NavBar(){
    return(
        <header className="h-16 px-4 md:px-0 lg:px-0 xl:px-0">
            <div className="xl:containerxl lg:containerlg md:containermd sm:containersm">
                <nav className="flex justify-between py-6">
                    <div><Link to="/"><img src="img/Logo.svg" alt="logo"/></Link></div>
                    <ul>
                    <li>
                        <Link to="/about" className="inter">About</Link>
                    </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default NavBar;