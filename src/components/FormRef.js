import React, { useRef } from "react";
import Card from "./Card";

const FormRef = () => {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Full Name:", fullNameRef.current.value);
    console.log("Email:", emailRef.current.value);
    console.log("Password:", passwordRef.current.value);
    console.log("Password Confirmation:", confirmPasswordRef.current.value);
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <input
          id="full_name"
          type="text"
          ref={fullNameRef}
          placeholder="Full Name"
          required
        />
        <input
          id="email"
          type="email"
          ref={emailRef}
          placeholder="Email"
          required
        />
        <input
          id="password"
          type="password"
          ref={passwordRef}
          placeholder="Password"
          required
        />
        <input
          id="password_confirmation"
          type="password"
          ref={confirmPasswordRef}
          placeholder="Confirm Password"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default FormRef;
