import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import FavoriteSites from "./components/FavoriteSites";
import DotSH from "./components/DotSH";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<FavoriteSites />} />
        <Route path="/dotSH" element={<DotSH />} />
      </Routes>
    </div>
  );
}

export default App;
