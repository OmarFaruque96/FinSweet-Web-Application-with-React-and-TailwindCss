import { Link } from "react-router-dom";
function NavBar(){
    return(
        <header>
            <nav>
                <div><Link to="/"><img src="img/Logo.svg" alt="logo"/></Link></div>
                <ul>
                <li>
                    <Link to="/about" >About</Link>
                </li>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar;