import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/app.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddFood from "./pages/AddFood";
import AvailableFood from "./pages/AvailableFood";
import MyDonations from "./pages/MyDonations";
import Requests from "./pages/Requests";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-food" element={<AddFood />} />
            <Route path="/foods" element={<AvailableFood />} />
            <Route path="/donations" element={<MyDonations />} />
            <Route path="/requests" element={<Requests />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;