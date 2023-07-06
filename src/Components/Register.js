import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { EditUser, submitForm } from "../redux/Allaction";
import ViewData from "./ViewData";

const Register = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const [editting, setEditting] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { username, email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation here
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    } else if(!editting && (data.formData.filter((e)=>formData.email === e.email)).length > 0 ){
  alert("Email Already Exit");
    } else if (editting === false) {
      dispatch(submitForm(formData));
      localStorage.setItem("data", JSON.stringify(formData));

      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else if (editting === true) {
      dispatch(EditUser(formData.email, formData));
      setEditting(false);
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };
  const updatedata = (user) => {
    setFormData({
      username: user.username,
      email: user.email,
      password: user.password,
      confirmPassword: user.password,
    });
    setEditting(true);
  };
  
  
  return (
    <>
      <div class="container d-flex flex-column align-items-center w-100">
        <form onSubmit={handleSubmit} class="container">
          <div class="form-group">
            <h2>{editting ? "Edit User" : "Add New Data"}</h2>
          </div>
          <div class="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleChange}
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              class="form-control"
              required
              readOnly={editting?true:false}
            />
          </div>
          <div class="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              class="form-control"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary mb-4">
            {editting ? "Update User" : "Add User"}
          </button>
        </form>
      <ViewData updatedata={updatedata} />
      </div>
    </>
  );
};

export default Register;
