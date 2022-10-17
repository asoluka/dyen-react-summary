import React from "react";

export const PageTemplate = ({ header, footer, children }) => {
  return (
    <>
      <div>{header}</div>
      <main>{children}</main>
      <div>{footer}</div>
    </>
  );
};
