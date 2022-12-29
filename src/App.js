import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Authentication/Login/Login";
import Signup from "./components/Authentication/Signup/Signup";
import LandingPage from "./components/LandingPage/LandingPage";
import Lilies from "./components/Lilies/Lilies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/lilies/dashboard" element={<Lilies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
