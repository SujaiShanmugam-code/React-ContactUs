import React from "react";
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="btn-con">
        <button className="btn">
          <MdMessage className="msg" /> VIA SUPPORT CHAT
        </button>
        <button className="btn-2">
          <IoMdCall className="msg" /> VIA CALL
        </button>
      </div>
      <div className="cont">
        <button className="btn-3">
          <MdEmail className="msg" /> VIA EMAIL FORM
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
