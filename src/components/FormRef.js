import React, { useRef } from "react";
import Card from "./Card";

const FormRef = () => {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      fullName: fullNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
    });
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <input
          ref={fullNameRef}
          id="full_name"
          type="text"
          placeholder="Full Name"
        />
        <input ref={emailRef} id="email" type="email" placeholder="Email" />
        <input
          ref={passwordRef}
          id="password"
          type="password"
          placeholder="Password"
        />
        <input
          ref={confirmPasswordRef}
          id="password_confirmation"
          type="password"
          placeholder="Confirm Password"
        />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default FormRef;
