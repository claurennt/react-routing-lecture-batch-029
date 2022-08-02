import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import OurTeam from "./components/OurTeam";
import Navigation from "./components/Navigation";
import ThankYou from "./components/ThankYou";
import Story from "./components/Story";
import TeamMember from "./components/TeamMember";

function App() {
  return (
    <div className="App">
      {/* the <Navigation/> component is outside of the Routing system 
      because we want it to be displayed at any url location */}
      <Navigation />
      {/* with the Routes component we enable the routing system on our react app, 
      specifically we map a component to a certain path */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* the Route component below has on opening and closing tag and 
        maps the path="about" to the component <About/>, 
        moreover it functions as a parent Route for about/story*/}
        <Route path="about" element={<About />}>
          {/* the Route component below is nested inside the parent Route component 
          and it maps he about/story path to the <Story/> component
          because it is nested, i.e. enclosed in the <Route></Route> tags, React Router Dom
          knows that its path is starting from about/*/}
          <Route path="story" element={<Story />} />
        </Route>
        <Route path="team" element={<OurTeam />}>
          {/* with the /:whateverNameOfParameter we make use of the dynamic routes*/}
          <Route path=":memberName" element={<TeamMember />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="thankyou" element={<ThankYou />} />
        {/* handles case when user goes to a loction that does not exist */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
