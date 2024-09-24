import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminForm() {
  const admins = [
    {
      name: "adminHsen",
      password: "78976841",
    },
    {
      name: "adminHikmat",
      password: "71498677",
    },
  ];

  const [formData, setFormData] = useState({ name: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const adminExists = admins.some(
      (admin) =>
        admin.name === formData.name && admin.password === formData.password
    );
    if (adminExists) {
      alert("Login successful!");
      navigate("/admin");
    } else {
      alert("Invalid name or password.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <h1 className="text-center pt-5">Admin Form</h1>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column align-items-center mt-5"
      >
        <label className="mb-3">
          Name:
          <input
            className="form-control"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label className="mb-3 ">
          Password:
          <input
            className="form-control"
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" className="btn btn-primary mt-3 " />
      </form>
    </div>
  );
}

export default AdminForm;
