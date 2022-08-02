import React from "react";
import { Outlet } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h2>
        This is the about component where you can find all info about our
        company!
      </h2>
      {/* because this component's route has nested routes, we expose them using the <Outlet/> component */}
      <Outlet />
    </div>
  );
};

export default About;
