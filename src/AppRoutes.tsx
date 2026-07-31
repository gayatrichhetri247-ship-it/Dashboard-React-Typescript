import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/ui/SideBar";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import UserProfile from "./features/profile/pages/UserProfile";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/sidebar" element={<SideBar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
