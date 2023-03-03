import NavBar from "./templates/NavBar";
import Banner from "./templates/frontpage/Banner";
import Brands from './templates/frontpage/PodCast';
import Episodes from "./templates/frontpage/Episodes";
import Blogs from "./templates/frontpage/Blogs";
import Sponsors from "./templates/frontpage/Sponsors";
import Footer from "./templates/Footer";
function Home() {
  return (
    <>
      <NavBar/>
      <Banner/>
      <Brands/>
      <Episodes/>
      <Blogs/>
      <Sponsors/>
      <Footer/>
    </>
  );
}

export default Home;