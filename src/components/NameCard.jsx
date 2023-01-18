import React, { useRef } from "react";

const NameCard = ({ setName }) => {
  const name = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const college = useRef(null);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    setName({
      name: name.current.value,
      email: email.current.value,
      phone: phone.current.value,
      college: college.current.value,
    });
  };

  return (
    <div className="para-card name-card">
      <div className="para-head">
        <h2>Enter Your Details</h2>
        <p>The test has duration of <span> 45 mins </span>, timer will start as soon as you submit your details.</p>
      </div>
      <form className="name-container" onSubmit={(e) => handleNameSubmit(e)}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            autoFocus
            required
            ref={name}
            name="name"
            id="name"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            required
            ref={email}
            name="email"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            required
            ref={phone}
            name="phone"
            id="phone"
            type="number"
            min="0"
            placeholder="Phone Number"
          />
        </div>
        <div className="input-group">
          <label htmlFor="college">College/University</label>
          <input
            required
            ref={college}
            name="college"
            id="college"
            type="text"
            placeholder="College/University"
          />
        </div>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default NameCard;
