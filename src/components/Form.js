import React from "react";
import Card from "./Card";

const Form = () => {
  return (
    <Card>
      <form id="info-form">
        <input id="full_name" type="text" placeholder="Full Name" required />
        <input id="email" type="email" placeholder="Email" required />
        <input id="password" type="password" placeholder="Password" required />
        <input
          id="password_confirmation"
          type="password"
          placeholder="Confirm Password"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default Form;
