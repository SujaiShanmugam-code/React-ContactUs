import React from "react";

const Message = () => {
  return (
    <div>
      <div className="contact-container">
        <div className="msg-con">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" required />
          </div>

          <div className="input-group text">
            <label htmlFor="text">Text</label>
            <input className="text" id="text" required />
          </div>

          <button className="submit">Submit</button>
        </div>
      </div>
      <div className="hero-container">
        <img
          className="hero-img"
          src="../src/assets/images/contact.svg"
          alt="Contact"
        />
      </div>
    </div>
  );
};

export default Message;
