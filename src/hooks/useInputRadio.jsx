import { useState } from "react";

const useInputRadio = ({ antiBodysIsValid, dateIsValid, numIsValid }) => {
  const [showTest, setShowTest] = useState(false);
  const [value, setValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  let formIsValid = false;
  if (
    (selectedOption !== "" && numIsValid && antiBodysIsValid) ||
    (selectedOption !== "" && antiBodysIsValid)
  ) {
    formIsValid = true;
  } else if (selectedOption !== "") {
    formIsValid = true;
  }

  const changeHandler = (e) => {
    setValue(e.target.value);
    setSelectedOption(e.target.value);
    if (e.target.value === "hadCovid") {
      setShowTest(true);
      setSelectedOption("");
    } else if (e.target.value === "hadntCovid" || e.target.value === "notYet") {
      setShowTest(false);
    }
  };

  return { changeHandler, value, formIsValid, showTest };
};

export default useInputRadio;
