import { useState } from "react";

const useInputRadio = (dateIsValid) => {
  const [showTest, setShowTest] = useState(false);
  const [value, setValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  let formIsValid = false;
  if (
    (selectedOption.name === "hadCovid" &&
      selectedOption.value !== "hadCovid") ||
    selectedOption.value === "hadTest"
  ) {
    formIsValid = true;
  } else if (selectedOption.value === "hadntTest" && dateIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }
  let error = "";

  const changeHandler = (e) => {
    setValue(e.target.value);
    setSelectedOption(e.target);
    if (e.target.value === "hadCovid") {
      setShowTest(true);
      setSelectedOption("");
    } else if (e.target.value === "hadntCovid" || e.target.value === "notYet") {
      setShowTest(false);
    }
  };

  return { changeHandler, value, formIsValid, showTest, error };
};

export default useInputRadio;
