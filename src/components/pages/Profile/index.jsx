import React from "react";
import { useSelector } from "react-redux";
import { getAuthData } from "../../../store/features/auth/authSlice";

export const Profile = () => {
  const authData = useSelector(getAuthData);
  console.log(authData);
  return (
    <>
      <div>{authData.id}</div>
      <div>{authData.email}</div>
    </>
  );
};
