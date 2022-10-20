import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAuthData, login } from "../../../features/auth/authSlice";
import {} from "../../../features/counter/counterSlice";
import { Input, Text } from "../../atoms";
import { AuthBanner } from "../../organisms";
import { AuthTemplate } from "../../templates";

export const LoginPage = () => {
  const auth = useSelector(getAuthData);
  const dispatch = useDispatch();
  const initialData = {
    email: "",
    password: "",
    address: "",
  };
  const [formValues, setFormValues] = useState(initialData);
  const handleSubmit = () => {
    // console.log(formValues);
    setFormValues(initialData);
    dispatch(login(formValues));
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
          <div className="col-auto">
            <button onClick={handleSubmit} className="btn btn-primary mb-3">
              Login
            </button>
          </div>
        </div>
      }
      left={
        <>
          {console.log(auth)}
          <AuthBanner
            leadText="Login"
            subText="Provide login details to gain access"
          />
        </>
      }
    />
  );
};
