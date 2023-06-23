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
      <SkillList />
    </div>
  );
}
// Skills Component
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" color="#e46400" />
      <Skill skill="Javascript" color="#FFDF01" />
      <Skill skill="Web Dev, Design, & Deploy" color="#DE73FF" />
      <Skill skill="React" color="#05C1FF" />
      <Skill skill="Python/Flask/Django/FastAPI" color="#32CD32" />
      <Skill skill="Git & GitHub" color="#D2042D" />
    </div>
  );
}

// Skill component
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
