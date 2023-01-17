import React, { useRef } from "react";

const NameCard = ({ setName }) => {
  const name = useRef(null);

  const handleNameSubmit = () => {
    setName(name.current.value);
  };

  return (
    <div className="question-card name-card">
      <div className="question-container">
        <h1>Enter Your Name</h1>
      </div>
      <div className="name-container">
        <input ref={name} type="text" placeholder="name" />
        <button onClick={handleNameSubmit}>submit</button>
      </div>
    </div>
  );
};

export default NameCard;
