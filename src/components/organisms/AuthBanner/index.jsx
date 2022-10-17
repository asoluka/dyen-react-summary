import React from "react";
import { Text } from "../../atoms";

export const AuthBanner = ({ leadText, subText }) => {
  return (
    <div>
      <Text type="h1">{leadText}</Text>
      <Text type="p">{subText}</Text>
    </div>
  );
};
