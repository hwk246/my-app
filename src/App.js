import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import FavoriteSites from "./components/FavoriteSites";
import DotSH from "./components/DotSH";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/favorite">
              Favorite
            </Link>
          </li>
          <li>
            <Link className="link" to="/dotSH">
              DotSH
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<FavoriteSites />} />
        <Route path="/dotSH" element={<DotSH />} />
      </Routes>
    </div>
  );
}

export default App;
