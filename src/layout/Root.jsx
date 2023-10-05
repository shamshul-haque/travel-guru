import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="max-w-screen-xl mx-auto font-montserrat">
      <Outlet />
    </div>
  );
};

export default Root;
