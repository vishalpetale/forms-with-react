import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    handleValueChange: handleNameInputChange,
    handleInputBlur: handleNameInputBlur,
    reset: nameInputReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    handleValueChange: handleEmailInputChange,
    handleInputBlur: handleEmailInputBlur,
    reset: emailInputReset,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(enteredName);
    console.log(enteredEmail);

    nameInputReset();
    emailInputReset();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className={`form-control ${nameInputHasError && "invalid"}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={handleNameInputChange}
          onBlur={handleNameInputBlur}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={`form-control ${emailInputHasError && "invalid"}`}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={handleEmailInputChange}
          onBlur={handleEmailInputBlur}
        />
        {emailInputHasError && (
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
