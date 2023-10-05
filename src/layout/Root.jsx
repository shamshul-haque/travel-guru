import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="font-montserrat">
      <Outlet />
    </div>
  );
};

export default Root;
