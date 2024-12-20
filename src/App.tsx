import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages";
import AboutPage from "./pages/about";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<h1>Not Found Page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
