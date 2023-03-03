import NavBar from "./templates/NavBar";
import EpisodeItem from "./templates/episodepage/EpisodeItem";
import Footer from "./templates/Footer";
import Sponsors from './templates/frontpage/Sponsors';
function Episode(){
    return(
        <>
            <NavBar/>
            <EpisodeItem/>
            <Sponsors/>
            <Footer/>
        </>
    )
}
export default Episode;