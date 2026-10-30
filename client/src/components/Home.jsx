
import React from "react";
import { Link } from "react-router-dom";

const internships = [
  { id: 1, title: "Web Development Intern", company: "Tech Solutions", duration: "3 Months", location: "Remote" },
  { id: 2, title: "Python Developer Intern", company: "CodeWorks", duration: "2 Months", location: "Coimbatore" },
  { id: 3, title: "Data Science Intern", company: "DataLabs", duration: "6 Months", location: "Remote" }
];

function Home() {
  return (
    <div className="container">
      <h1>Student Internship Portal</h1>
      <p>Explore available internships and apply today!</p>

      <div className="cards">
        {internships.map((internship) => (
          <div className="card" key={internship.id}>
            <h2>{internship.title}</h2>
            <p>Company: {internship.company}</p>
            <p>Duration: {internship.duration}</p>
            <p>Location: {internship.location}</p>
            <Link to={`/internship/${internship.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
