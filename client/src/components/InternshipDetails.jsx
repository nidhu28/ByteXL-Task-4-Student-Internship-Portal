
import React from "react";
import { Link, useParams } from "react-router-dom";

const internships = [
  { id: 1, title: "Web Development Intern", company: "Tech Solutions", duration: "3 Months", location: "Remote", description: "Work on website development using HTML, CSS and React." },
  { id: 2, title: "Python Developer Intern", company: "CodeWorks", duration: "2 Months", location: "Coimbatore", description: "Learn Python programming and application development." },
  { id: 3, title: "Data Science Intern", company: "DataLabs", duration: "6 Months", location: "Remote", description: "Work with data analysis and machine learning." }
];

function InternshipDetails() {
  const { id } = useParams();
  const internship = internships.find(item => item.id === Number(id));

  if (!internship) return <h2>Internship not found</h2>;

  return (
    <div className="container">
      <h1>{internship.title}</h1>
      <p>Company: {internship.company}</p>
      <p>Duration: {internship.duration}</p>
      <p>Location: {internship.location}</p>
      <p>Description: {internship.description}</p>

      <Link to={`/apply/${internship.id}`}>
        <button>Apply Now</button>
      </Link>

      <br /><br />
      <Link to="/">Back to Internships</Link>
    </div>
  );
}

export default InternshipDetails;
