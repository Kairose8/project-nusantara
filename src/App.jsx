import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExplorePage from "./pages/ExplorePage";
import TripPlanner from "./pages/TripPlanner";
import MapPage from "./pages/MapPage";
import AboutUs from "./pages/Credit";
import Background from "./assets/bg2.jpg";

export default function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ExplorePage" element={<ExplorePage />} />
          <Route path="/TripPlanner" element={<TripPlanner />} />
          <Route path="/MapPage" element={<MapPage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
}
