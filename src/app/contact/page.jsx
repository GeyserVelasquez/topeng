import React from "react";
import "./contact.css";
import { Entry } from "../components/entry/entry.jsx";
import { MyButtom } from "../components/myButton/myButtom";

export default function Contact() {
  return (
    <section className="contact-us">
      <div className="contact-form-container">
        <h3>Contact Us</h3>
        <form className="contact-form">
          <div className="input-row">
            <Entry className="contact-name" holder="First Name" />
            <Entry className="contact-lastName" holder="Last Name" />
          </div>
          <Entry className="contact-email" type="mail" holder="Email" />
          <textarea
            name="message"
            className="contact-text"
            placeholder="Message"
          ></textarea>
          <div className="input-row">
            <input className="terms" type="checkbox" />
            <label>I like to get news about Topeng</label>
          </div>
          <MyButtom text="Send Message"/>
        </form>
      </div>
      <div className="picture-container"></div>
    </section>
  );
}
