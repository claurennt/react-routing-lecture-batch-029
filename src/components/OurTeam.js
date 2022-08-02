import React from "react";
import { Link, Outlet } from "react-router-dom";
const OurTeam = () => {
  const teamMembers = ["Sarah", "Lilian", "Alexis"];
  return (
    <div>
      Our Team component
      <ul>
        {teamMembers.map((member, i) => (
          <Link key={i} to={member}>
            <li>{member}</li>
          </Link>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default OurTeam;
