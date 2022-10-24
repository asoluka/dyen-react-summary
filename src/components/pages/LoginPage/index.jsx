import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginAsync } from "../../../store/features/auth/authSlice";
import { Input, Text } from "../../atoms";
import { AuthBanner } from "../../organisms";
import { AuthTemplate } from "../../templates";

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialData = {
    email: "",
    password: "",
    address: "",
  };
  const [formValues, setFormValues] = useState(initialData);
  const handleSubmit = async () => {
    setFormValues(initialData);
    await dispatch(loginAsync(formValues));
    navigate("/profile");
  };

  const handleChange = (e) =>
    setFormValues((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/profile");
    }
  });

  return (
    <AuthTemplate
      right={
        <div className="col">
          <Input
            className="form-control"
            type="email"
            name="email"
            label="Email"
            value={formValues.email}
            onChange={handleChange}
          />
          <Input
            className="form-control"
            type="password"
            name="password"
            label="Password"
            value={formValues.password}
            onChange={handleChange}
          />
          <Input
            className="form-control"
            type="address"
            name="address"
            label="address"
            value={formValues.address}
            onChange={handleChange}
          />

          <Text type="p">
            Not registered? <Link to="/signup">Sign Up</Link>
          </Text>
          <div className="col-auto">
            <button onClick={handleSubmit} className="btn btn-primary mb-3">
              Login
            </button>
          </div>
        </div>
      }
      left={
        <>
          <AuthBanner
            leadText="Login"
            subText="Provide login details to gain access"
          />
        </>
      }
    />
  );
};
