import { useState } from "react";

function useInput(validateInput) {
  const [enteredValue, setEnteredValue] = useState("");
  const [valueIsTouched, setValueIsTouched] = useState(false);

  const valueIsValid = validateInput(enteredValue);
  const hasError = !valueIsValid && valueIsTouched;

  const handleValueChange = (e) => {
    setEnteredValue(e.target.value);
  };

  const handleValueBlur = () => {
    setValueIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setValueIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    handleValueChange,
    handleValueBlur,
    reset,
  };
}
export default useInput;
