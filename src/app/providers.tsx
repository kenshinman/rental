"use client";

import StoreProvider from "../../state/redux";
import {FC, PropsWithChildren} from "react";

const Providers: FC<PropsWithChildren> = ({children}) => {
  return <StoreProvider>{children}</StoreProvider>;
};

export default Providers;
