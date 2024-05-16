import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExplorePage from "./pages/ExplorePage";
import TripPlanner from "./pages/TripPlanner";
import MapPage from "./pages/MapPage";
import AboutUs from "./pages/Credit";
import Weather from "./pages/Weather";

export default function App() {
  return (
    <div className="bg-gradient-to-r from-stone-500 to-stone-700 h-screen " >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ExplorePage" element={<ExplorePage />} />
          <Route path="/TripPlanner" element={<TripPlanner />} />
          <Route path="/MapPage" element={<MapPage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Weather" element={<Weather />} />
        </Routes>
      </Router>
    </div>
  );
}
