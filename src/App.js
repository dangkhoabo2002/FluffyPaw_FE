import "./App.css";
import { Routes, Route } from "react-router-dom";

import PoProfile from "./screen/Po_profile";
import Login from "./screen/login&register";
import LandingPage from "./screen/landing";
import PetDetail from "./screen/Po_petDetail";
import PoWallet from "./screen/Po_wallet";
import SmLogin from "./screen/Sm_register";
import DogService from "./screen/Dog_services";
import CatService from "./screen/Cat_services";
import TermPolicy from "./screen/contact/term";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        {/* Guest*/}
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/term_policy" element={<TermPolicy />}></Route>

        {/* Pet Owner */}
        <Route path="/po_profile" element={<PoProfile />}></Route>
        <Route path="/po_profile/po_petdetail" element={<PetDetail />}></Route>
        <Route path="/po_wallet" element={<PoWallet />}></Route>
        <Route path="/dog_service" element={<DogService />}></Route>
        <Route path="/cat_service" element={<CatService />}></Route>

        {/* Test */}
        <Route path="/testLogin" element={<SmLogin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
