import NavBar from "./templates/NavBar"
import Footer from "./templates/Footer"
import Sponsors from './templates/frontpage/Sponsors'
import Banner from "./templates/aboutpage/Banner"

function About() {
    return (
        <div>
            <NavBar/>
            <Banner/>
            <Sponsors/>
            <Footer/>
        </div>
    )
}

export default About