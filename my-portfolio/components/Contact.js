import React from "react";
import Button from "./Button";
import Heading from "./Heading";

const Contact = () => {
  return (
    <section className="container mx-auto py-10 p-4 ">
      <Heading title={"Contact Me"} />

      <form className="flex flex-col p-4 gap-8 w-auto bg-gray-200">
        <div className="grid grid-col-1 md:grid-cols-2 gap-8">
          <input
            type={"text"}
            placeholder="Name"
            className="inputStyle"
            required
          />
          <input
            type={"email"}
            placeholder="Email"
            className="inputStyle"
            required
          />
        </div>
        <input
          type={"text"}
          placeholder="Subject"
          className="inputStyle"
          required
        />
        <textarea
          rows={"6"}
          placeholder="Message"
          className="inputStyle"
          required
        ></textarea>
        <div className="self-end">
          <button type="submit" className="btn">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
