import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      This location is not existing!<Link to="/">back to main</Link>
    </div>
  );
};

export default NotFound;
