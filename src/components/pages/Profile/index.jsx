import React from "react";
import { useSelector } from "react-redux";
import { getAuthData } from "../../../store/features/auth/authSlice";
import { PageTemplate } from "../../templates";

export const Profile = () => {
  const authData = useSelector(getAuthData);
  console.log(authData);
  return (
    <PageTemplate>
      <div>UserID: {authData.id}</div>
      <div>Email: {authData.email}</div>
    </PageTemplate>
  );
};
