import React from "react";
import { useParams } from "react-router-dom";
const TeamMember = () => {
  // we destructure the params memberName from the object return from the useParams hook
  const { memberName } = useParams();

  return <div>information about...{memberName}</div>;
};

export default TeamMember;
