import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsNotValid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.trim().includes("@");
  const emailInputIsNotValid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const handleNameInputChange = (e) => {
    setEnteredName(e.target.value);
  };

  const handleEmailInputChange = (e) => {
    setEnteredEmail(e.target.value);
  };

  const handleNameInputBlur = (e) => {
    setEnteredNameTouched(true);
  };

  const handleEmailInputBlur = () => {
    setEnteredEmailTouched(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(enteredName);
    console.log(enteredEmail);

    setEnteredName("");
    setEnteredEmail("");

    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className={`form-control ${nameInputIsNotValid && "invalid"}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={handleNameInputChange}
          onBlur={handleNameInputBlur}
        />
        {nameInputIsNotValid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={`form-control ${emailInputIsNotValid && "invalid"}`}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={handleEmailInputChange}
          onBlur={handleEmailInputBlur}
        />
        {emailInputIsNotValid && (
          <p className="error-text">Email must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
