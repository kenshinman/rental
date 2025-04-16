import React, {ReactNode} from "react";
import {NAVBAR_HEIGHT} from "@lib/constants";
import Navbar from "@components/Navbar";

const Layout = ({children}: {children: ReactNode}) => {
  return (
    <div>
      <Navbar />
      <main className={`h-ull flex w-full flex-col pt-[${NAVBAR_HEIGHT}px]`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
