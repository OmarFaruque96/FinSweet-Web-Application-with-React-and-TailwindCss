import NavBar from "./templates/NavBar";
import Banner from "./templates/frontpage/Banner";
import Brands from './templates/frontpage/PodCast';
import Episodes from "./templates/frontpage/Episodes";
function Home() {
  return (
    <>
      <NavBar/>
      <Banner/>
      <Brands/>
      <Episodes/>
    </>
  );
}

export default Home;