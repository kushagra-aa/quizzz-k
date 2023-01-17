import React, { useRef } from "react";

const NameCard = ({ setName }) => {
  const name = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    setName({
      name: name.current.value,
      email: email.current.value,
      phone: phone.current.value,
    });
  };

  return (
    <div className="para-card name-card">
      <div className="para-head">
        <h2>Enter Your Details</h2>
      </div>
      <form className="name-container" onSubmit={(e) => handleNameSubmit(e)}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
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
            placeholder="Phone Number"
          />
        </div>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default NameCard;
