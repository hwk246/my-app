import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import FavoriteSites from "./components/FavoriteSites";
import DotSH from "./components/DotSH";
import Nav from "./components/Nav";
import ApiAjax from "./components/ApiAjax";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<FavoriteSites />} />
        <Route path="/dotSH" element={<DotSH />} />
        <Route path="/api" element={<ApiAjax />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
