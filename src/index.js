import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    backgroundColor: "#e46400",
    color: "#000",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    backgroundColor: "#000",
    color: "#FFDF01",
  },
  {
    skill: "Web Dev, Design, & Deploy",
    level: "advanced",
    backgroundColor: "#DE73FF",
    color: "#000",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    backgroundColor: "#D2042D",
    color: "#000",
  },
  {
    skill: "React",
    level: "beginner",
    backgroundColor: "#05C1FF",
    color: "#000",
  },
  {
    skill: "Python/Flask/Django/FastAPI",
    level: "advanced",
    backgroundColor: "#32CD32",
    color: "#000",
  },
];

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
        Full Stack Developer and Gym-rat at Golds Gym. When I'm not coding or
        lifting, I love to wrestle and coach wrestling. I love Colombian food
        and Ritas Ice Cream!
      </p>
      <SkillList />
    </div>
  );
}
// Skills Component
function SkillList() {
  // map over skills and assign to create a skill list
  skills.map((skills) => (
    <Skill skill={skills.skill} color={skills.color} level={skills.level} />
  ));
  return (
    <div className="skill-list">
      {skills.map((skills) => (
        <Skill
          skill={skills.skill}
          backgroundColor={skills.backgroundColor}
          color={skills.color}
          level={skills.level}
        />
      ))}
    </div>
  );
}

// Skill component
function Skill(props) {
  const style = {
    color: props.color,
    backgroundColor: props.backgroundColor,
  };
  return (
    <div className="skill" style={style}>
      <span>{props.skill}</span>
      <span>{props.level === "beginner" && "👶"}</span>
      <span>{props.level === "intermediate" && "👍"}</span>
      <span>{props.level === "advanced" && "💪"}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
