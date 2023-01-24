import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BookList from "./components/BookList";

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
            <Link className="link" to="/booklist">
              BookList
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booklist" element={<BookList />} />
      </Routes>
    </div>
  );
}

export default App;
