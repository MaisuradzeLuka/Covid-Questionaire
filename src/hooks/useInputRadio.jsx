import { useState } from "react";

const useInputRadio = (dateIsValid) => {
  const [selectedOption, setSelectedOption] = useState(
    JSON.parse(sessionStorage.getItem("selectedOption")) || ""
  );

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

  const changeHandler = (e) => {
    setSelectedOption(e.target);

    sessionStorage.setItem(e.target.name, e.target.value);
    sessionStorage.setItem(
      "selectedOption",
      JSON.stringify({ name: e.target.name, value: e.target.value })
    );
  };

  return { changeHandler, formIsValid };
};

export default useInputRadio;
