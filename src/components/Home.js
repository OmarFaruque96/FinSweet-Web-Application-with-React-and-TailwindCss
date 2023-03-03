import NavBar from "./templates/NavBar";
import Banner from "./templates/frontpage/Banner";
import Brands from './templates/frontpage/PodCast';
import Episodes from "./templates/frontpage/Episodes";
import Blogs from "./templates/frontpage/Blogs";
function Home() {
  return (
    <>
      <NavBar/>
      <Banner/>
      <Brands/>
      <Episodes/>
      <Blogs/>
    </>
  );
}

export default Home;