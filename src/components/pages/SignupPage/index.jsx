import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Text } from "../../atoms";
import { AuthBanner } from "../../organisms";
import { AuthTemplate } from "../../templates";

export const SignupPage = () => {
  const navigate = useNavigate();
  const initialData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialData);
  const handleSubmit = () => {
    setFormValues(initialData);
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
            name="firstName"
            label="First Name"
            value={formValues.firstName}
            onChange={handleChange}
          />
          <Input
            className="form-control"
            name="lastName"
            label="Last Name"
            value={formValues.lastName}
            onChange={handleChange}
          />
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
          <Text type="p">
            Already signed up? <Link to="/login">Login</Link>
          </Text>
          <div className="col-auto">
            <button onClick={handleSubmit} className="btn btn-primary mb-3">
              Sign Up
            </button>
          </div>
        </div>
      }
      left={
        <AuthBanner
          leadText="Signup"
          subText="Provide required info to signup"
        />
      }
    />
  );
};
