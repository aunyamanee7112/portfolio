import React from "react";
import Footer from "./footer";
import Navbar from "./common/navbar";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="h-full w-full">
      <Navbar />
      <div className="h-[60px] text-white bg-black w-fit relative visible lg:invisible">
        <div className="inline-flex items-center justify-center h-[60px] capitalize bg-black text-white w-full fixed z-10">
          <p className="text-xl w-fit">please slide !</p>
        </div>
      </div>
      <div className="p-[2rem]">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
