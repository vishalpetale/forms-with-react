import useInput from "../hooks/useInpput";

const BasicForm = (props) => {
  const validateName = (value) => {
    return value.trim() !== "";
  };

  const validateEmail = (value) => {
    return value.trim().includes("@");
  };

  const resetForm = () => {
    resetFName();
    resetLName();
    resetEmail();
  };

  const {
    value: enteredFName,
    isValid: enteredFNameIsValid,
    hasError: fnameInputHasError,
    handleValueChange: handleFNameChange,
    handleValueBlur: handleFNameBlur,
    reset: resetFName,
  } = useInput(validateName);

  const {
    value: enteredLName,
    isValid: enteredLNameIsValid,
    hasError: lnameInputHasError,
    handleValueChange: handleLNameChange,
    handleValueBlur: handleLNameBlur,
    reset: resetLName,
  } = useInput(validateName);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    handleValueChange: handleEmailChange,
    handleValueBlur: handleEmailBlur,
    reset: resetEmail,
  } = useInput(validateEmail);

  let formIsValid = false;
  if (enteredFNameIsValid && enteredLNameIsValid && enteredEmailIsValid)
    formIsValid = true;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formIsValid) return;

    console.log(enteredFName, enteredLName, enteredEmail);
    resetForm();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="control-group">
        <div className={`form-control ${fnameInputHasError && "invalid"}`}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFName}
            onChange={handleFNameChange}
            onBlur={handleFNameBlur}
          />
          {fnameInputHasError && (
            <p className="error-text">Please enter first name.</p>
          )}
        </div>
        <div className={`form-control ${lnameInputHasError && "invalid"}`}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLName}
            onChange={handleLNameChange}
            onBlur={handleLNameBlur}
          />
          {lnameInputHasError && (
            <p className="error-text">Please enter last name.</p>
          )}
        </div>
      </div>
      <div className={`form-control ${emailInputHasError && "invalid"}`}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
