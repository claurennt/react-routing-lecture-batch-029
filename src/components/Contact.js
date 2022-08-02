import React from "react";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    /* with the navigate function returned from the useNavigate() hook 
    we navigate programmatically to a certain url location 
    */
    setTimeout(() => navigate("thankyou"), 2000);
  };
  return (
    <div>
      <h2>Contact page of my website</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="your message" />
        <button>Submit form</button>
      </form>
    </div>
  );
};

export default Contact;
