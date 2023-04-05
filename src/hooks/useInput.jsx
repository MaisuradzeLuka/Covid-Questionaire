import { useState } from "react";

const useInput = (validation) => {
  const [inputValue, setInputValue] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
    setInputIsTouched(true);
  };

  const inputValidation = validation(inputValue);

  const inputIsInvalid = !inputValidation && inputIsTouched;

  const hasError = inputIsInvalid ? "pText error" : "pText";

  return {
    inputValue,
    onChangeHandler,
    hasError,
    inputValidation,
  };
};

export default useInput;
