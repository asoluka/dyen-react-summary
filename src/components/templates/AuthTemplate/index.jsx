import React from "react";

export const AuthTemplate = ({ right, left }) => {
  return (
    <div className="container">
      <div className="row height-100">
        <section className="col-12 col-sm-3 d-flex align-items-center">
          {left}
        </section>
        <section className="col-12 col-sm-9 d-flex align-items-center">
          {right}
        </section>
      </div>
    </div>
  );
};
