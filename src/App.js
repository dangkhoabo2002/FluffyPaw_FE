import "./App.css";
import { Routes, Route } from "react-router-dom";

import PoProfile from "./screen/Po_profile";
import Login from "./screen/login&register";
import LandingPage from "./screen/landing";
import PetDetail from "./screen/Po_petDetail";
import PoWallet from "./screen/Po_wallet";
import SmLogin from "./screen/Sm_register";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        {/* Guest*/}
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>

        {/* Pet Owner */}
        <Route path="/po_profile" element={<PoProfile />}></Route>
        <Route path="/po_profile/po_petdetail" element={<PetDetail />}></Route>
        <Route path="/po_wallet" element={<PoWallet />}></Route>

        {/* Test */}
        <Route path="/testLogin" element={<SmLogin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
