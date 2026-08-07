import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "../components/ui/SideBar";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";
import UserProfile from "../features/products/profile/UserProfile";
import StatsCard from "../components/ui/StatsCard";
import Header from "../components/ui/Header";
import TableHeader from "../components/tables/TableHeader";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/sidebar" element={<SideBar />} />
        <Route path="/statscard" element={<StatsCard/>} />
        <Route path="/header" element={<Header/>} />
        <Route path="/tableheader" element={<TableHeader/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
