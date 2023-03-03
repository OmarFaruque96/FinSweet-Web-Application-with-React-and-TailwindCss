import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Episode from "./components/Episode";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/blog" element={ <Blog/> } />
        <Route path="/episode" element={ <Episode/> } />
      </Routes>
    </div>
  );
}

export default App;
