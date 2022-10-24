import React from "react";
import { Footer } from "../../molecules/Footer";
import { Navbar } from "../../molecules/Navbar";

export const PageTemplate = ({ header, footer, children }) => {
  return (
    <>
      {!header ? <Navbar /> : header}
      <main>{children}</main>
      {!footer ? <Footer /> : footer}
    </>
  );
};
