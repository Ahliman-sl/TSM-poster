import Header from "./Header";
import SideBar from "./SideBar";
import RightBar from "./RightBar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-40 ">
        <Header />
      </div>

      {/* SideBar */}
      <div className="hidden md:block fixed top-[4rem] left-0 bottom-0 z-30  md:w-1/6">
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="col-span-12 md:col-start-3 md:col-span-8 pt-[4rem]">
        <Outlet />
      </div>

      {/* RightBar */}
      <div className="hidden md:block fixed top-[4rem] right-0 bottom-0 md:w-1/6 z-20">
        <RightBar />
      </div>
    </div>
  );
}

export default AppLayout;
