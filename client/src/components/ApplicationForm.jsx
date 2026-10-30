import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

function ApplicationForm() {
  const { id } = useParams();

  const [form, setForm] = useState({
    name: "",
    email: "",
    rollNumber: "",
    internship: id
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://bytexl-task4-backend.onrender.com/api/applications",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Application failed");
      }

      setMessage("Application submitted successfully!");
      setForm({
        name: "",
        email: "",
        rollNumber: "",
        internship: id
      });
    } catch (error) {
      setMessage(error.message || "Error submitting application");
    }
  };

  return (
    <div className="container">
      <h1>Internship Application Form</h1>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Student Name" value={form.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email ID" value={form.email} onChange={handleChange} required />
        <input name="rollNumber" placeholder="Roll Number" value={form.rollNumber} onChange={handleChange} required />
        <input name="internship" value={form.internship} onChange={handleChange} required />

        <button type="submit">Submit Application</button>
      </form>

      <p>{message}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default ApplicationForm;
