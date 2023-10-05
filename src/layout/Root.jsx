import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const Root = () => {
  return (
    <div className="max-w-screen-xl mx-auto font-montserrat">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
