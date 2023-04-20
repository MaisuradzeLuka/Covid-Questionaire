import { useEffect, useState } from "react";

const useInput = (validation, name) => {
  const [inputValue, setInputValue] = useState(
    sessionStorage.getItem(name) || ""
  );
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    sessionStorage.setItem(name, inputValue);
  }, [inputValue]);

  const onBlurHandler = () => {
    setInputIsTouched(true);
  };

  const inputValidation = validation(inputValue);

  const inputIsInvalid = !inputValidation && inputIsTouched;

  const hasError = inputIsInvalid ? "pText error" : "pText";

  return {
    inputValue,
    onChangeHandler,
    onBlurHandler,
    hasError,
    inputValidation,
  };
};

export default useInput;
