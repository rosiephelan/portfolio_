import React from "react";
import "../App.css";

function Home(props) {
  return (
    <div>
      <div className="header">
        <h1 className="animated bounceInDown">Rosie's Portfolio</h1>
        <h2 className="animated bounceInDown">Welcome to my page!</h2>
        <div className="contact-section">
          <h5>Contact me:</h5>
          <p>
            email: rosiephelan223@gmail.com <br />
            LinkedIn: https://www.linkedin.com/in/rosie-phelan-3b05b4147/
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
