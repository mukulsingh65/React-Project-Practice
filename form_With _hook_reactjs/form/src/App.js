import React, { useEffect, useState } from "react";
import "./index.css";

const App = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);


  const handleFirstNameInputChange = (event) => {
    setValues({ ...values, firstName: event.target.value });
  }

  const handleLastNameInputChange = (event) => {
    setValues({ ...values, lastName: event.target.value });
  }

  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  }

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? <div className="success-message">Success! Thank you for registration</div> : null}
        {/* Uncomment the next line to show the success message */}
        {/* <div class="success-message">Success! Thank you for registering</div> */}
        <input
          value={values.firstName}
          onChange={handleFirstNameInputChange}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !values.firstName ? <span>Please enter the first name</span> : null}
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <input
          onChange={handleLastNameInputChange}
          value={values.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastName ? <span>Please enter the last name</span> : null}
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <input
          onChange={handleEmailInputChange}
          value={values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email ? <span>Please enter the email address</span> : null}
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;