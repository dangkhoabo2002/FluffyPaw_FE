import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./component/petowner/navbar";
import PoProfile from "./screen/petowner/profile";
import Login from "./screen/login";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/po_profile" element={<PoProfile />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
