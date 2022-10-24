import React from "react";
import { PageTemplate } from "../../templates";

export const HomePage = () => {
  return (
    <PageTemplate header={<div>Different header</div>}>
      <h1>Welcome to home page</h1>
    </PageTemplate>
  );
};
