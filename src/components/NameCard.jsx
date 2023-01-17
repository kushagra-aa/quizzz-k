import React, { useRef } from "react";

const NameCard = ({ setName }) => {
  const name = useRef(null);

  const handleNameSubmit = () => {
    setName(name.current.value);
  };

  return (
    <div className="para-card name-card">
      <div className="para-head">
        <h2>Enter Your Name</h2>
      </div>
      <div className="name-container">
        <input ref={name} type="text" placeholder="name" />
        <button onClick={handleNameSubmit}>submit</button>
      </div>
    </div>
  );
};

export default NameCard;
