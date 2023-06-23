import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return <Card />;
}

// Card component
function Card() {
  return (
    <div className="card">
      <Avatar />
      <Intro />
    </div>
  );
}

// Avatar component
function Avatar() {
  return <img className="avatar" src="avatar/me2.0.jpg" alt="Avatar" />;
}

// Intro component
function Intro() {
  return (
    <div className="container">
      <h1>Charles Rocke</h1>
      <p>
        Full Stack Developer and Gymhead at Golds Gym. When I'm not coding or
        lifting, I love to wrestle and coach wrestling. I love Colombian food
        and Ritas Ice Cream!
      </p>
      <SkillList
        react="#05C1FF"
        js="#FFDF01"
        python="#32CD32"
        html="#e46400"
        web="#DE73FF"
        gitHub="#D2042D"
      />
    </div>
  );
}
// Skills Component
function SkillList(props) {
  return (
    <div className="skill-list">
      <div className="skill" style={{ backgroundColor: props.html }}>
        HTML+CSS
      </div>
      <div className="skill" style={{ backgroundColor: props.js }}>
        Javascript
      </div>
      <div className="skill" style={{ backgroundColor: props.web }}>
        Web Dev, Design, Deploy
      </div>
      <div className="skill" style={{ backgroundColor: props.react }}>
        React
      </div>
      <div className="skill" style={{ backgroundColor: props.python }}>
        Python
      </div>
      <div className="skill" style={{ backgroundColor: props.gitHub }}>
        Git & Github
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
