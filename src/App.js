import "./App.css";
import { Routes, Route } from "react-router-dom";

import PoProfile from "./screen/Po_profile";
import Login from "./screen/login&register";
import LandingPage from "./screen/landing";
import PetDetail from "./screen/Po_petDetail";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/po_profile" element={<PoProfile />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/po_profile/po_petdetail" element={<PetDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
