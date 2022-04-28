import { useState } from "react";
function useInput(validateInput) {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);

  const enteredValueIsValid = validateInput(enteredValue);
  const hasError = !enteredValueIsValid && enteredValueTouched;

  const handleValueChange = (e) => {
    setEnteredValue(e.target.value);
  };

  const handleInputBlur = (e) => {
    setEnteredValueTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setEnteredValueTouched(false);
  };

  return {
    value: enteredValue,
    isValid: enteredValueIsValid,
    hasError,
    handleValueChange,
    handleInputBlur,
    reset,
  };
}
export default useInput;
