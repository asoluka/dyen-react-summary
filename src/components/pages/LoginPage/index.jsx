import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Text } from "../../atoms";
import { AuthBanner } from "../../organisms";
import { AuthTemplate } from "../../templates";

export const LoginPage = () => {
  const initialData = {
    email: "",
    password: "",
    address: "",
  };
  const [formValues, setFormValues] = useState(initialData);
  const handleSubmit = () => {
    console.log(formValues);
    setFormValues(initialData);
  };
  const handleChange = (e) =>
    setFormValues((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
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
          <div class="col-auto">
            <button onClick={handleSubmit} class="btn btn-primary mb-3">
              Login
            </button>
          </div>
        </div>
      }
      left={
        <AuthBanner
          leadText="Login"
          subText="Provide login details to gain access"
        />
      }
    />
  );
};
