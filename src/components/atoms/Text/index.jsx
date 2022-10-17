import React from "react";

export const Text = ({ type, children }) => {
  if (type === "p") {
    return <p>{children}</p>;
  }

  if (type === "h1") {
    return <h1>{children}</h1>;
  }

  if (type === "h2") {
    return <h2>{children}</h2>;
  }

  return <span>{children}</span>;
};
