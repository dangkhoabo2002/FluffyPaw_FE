import "./App.css";
import { Routes, Route } from "react-router-dom";

import SmLogin from "./screen/Sm_register";

// Fluffy Paw
import Login from "./screen/login&register";
import LandingPage from "./screen/landing";
import DogService from "./screen/Dog_services";
import CatService from "./screen/Cat_services";
import Services from "./screen/Service_mainpage";
import PoWallet from "./screen/Po_wallet";

// Pet Owner
import PoProfile from "./screen/Po_profile";
import PetDetail from "./screen/Po_petDetail";

// Store Manager
import SMMainPage from "./screen/Sm_mainpage";
import SMDashboard from "./screen/Sm_dasboard";
import SMStaffManagement from "./screen/Sm_listofstaff";
import SMProfile from "./screen/Sm_profile";
import SMWallet from "./screen/Sm_wallet";

// Staff
import StaffMainPage from "./screen/staff_mainpage";
import StaffDashboard from "./screen/staff_dashboard";
import StaffProfile from "./screen/staff_profile";
import StaffStoreDetail from "./screen/staff_store_detail";

// Admin
import ServiceApproval from "./screen/staff_service_approval";

// Others
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

        {/* Store Manager + Staff */}
        <Route path="/store" element={<StaffMainPage />}>
          <Route
            path="/store/staff_dashboard"
            element={<StaffDashboard />}
          ></Route>
          <Route
            path="/store/staff_service_approval"
            element={<ServiceApproval />}
          ></Route>
          <Route
            path="/store/staff_store_detail"
            element={<StaffStoreDetail />}
          ></Route>
          <Route path="/store/staff_profile" element={<StaffProfile />}></Route>
        </Route>

        <Route path="/store_manager" element={<SMMainPage />}>
          <Route
            path="/store_manager/dashboard"
            element={<SMDashboard />}
          ></Route>
          <Route
            path="/store_manager/staff_management"
            element={<SMStaffManagement />}
          ></Route>
          <Route
            path="/store_manager/sm_profile"
            element={<SMProfile />}
          ></Route>
          <Route path="/store_manager/sm_wallet" element={<SMWallet />}></Route>
        </Route>

        <Route path="/services" element={<Services />}></Route>
        {/* Test */}
      </Routes>
    </div>
  );
}

export default App;
