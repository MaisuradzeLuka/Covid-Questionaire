import React, { useContext } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context-API/context";
import useInput from "../hooks/useInput";
import useWarning from "../hooks/useWarning";
import Header from "../generalLayouts/Header";
import Input from "../generalLayouts/Input";
import personalInfoStyles from "./personalInfo.module.css";

const PersonalInfo = () => {
  const { email, letters } = useContext(AuthContext);
  const { message, setMessage } = useWarning("");

  const navigate = useNavigate();

  const {
    inputValue: nameValue,
    onChangeHandler: nameChangeHandler,
    hasError: nameInputClass,
    inputValidation: nameIsValid,
    onBlurHandler: nameBlurHandler,
  } = useInput((value) => letters.test(value));

  const {
    inputValue: lastnameValue,
    onChangeHandler: lastnameChangeHandler,
    hasError: lastnameInputClass,
    inputValidation: lastNameIsValid,
    onBlurHandler: lastNameBlurHandler,
  } = useInput((value) => letters.test(value));

  const {
    inputValue: emailValue,
    onChangeHandler: emailChangeHandler,
    hasError: emailInputClass,
    inputValidation: emailIsValid,
    onBlurHandler: emailBlurHandler,
  } = useInput((value) => email.test(value));

  let formIsValid = false;

  if (emailIsValid && nameIsValid && lastNameIsValid) {
    formIsValid = true;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (formIsValid) {
      navigate("/covidsurvey", { replace: true });
    } else {
      setMessage("გთხოვთ შეავსოთ სავალდებულო ველები");
    }
  };

  return (
    <section className={personalInfoStyles.section}>
      <Header page="1" />
      <div className={personalInfoStyles.formWrapper}>
        <form autoComplete="off" onSubmit={onSubmit}>
          <Input
            name={"სახელი*"}
            id={"name"}
            type={"text"}
            placeholder={"თქვენი სახელი"}
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            className={nameInputClass}
            text={" სახელი ველი უნდა შედგებოდეს 3 ან მეტი, ქართული სიმბოლოსგან"}
          />
          <Input
            name={"გვარი*"}
            id={"lastname"}
            type={"text"}
            placeholder={"თქვენი გვარი"}
            value={lastnameValue}
            onChange={lastnameChangeHandler}
            onBlur={lastNameBlurHandler}
            className={lastnameInputClass}
            text={"გვარი ველი უნდა შედგებოდეს 3 ან მეტი, ქართული სიმბოლოსგან"}
          />
          <Input
            name={"მეილი*"}
            id={"email"}
            type={"email"}
            placeholder={"თქვენი მეილი"}
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            className={emailInputClass}
            text={"გთხოვთ გამოიყენოთ Redberry-ს მეილით (youremail@redberry.ge)"}
          />
          <div className={personalInfoStyles.warning}>
            <p>*-ით მონიშნული ველების შევსება სავალდებულოა</p>
          </div>
          <button type="submit" className={personalInfoStyles.btn}>
            <AiOutlineRight className={personalInfoStyles.icon} />
          </button>
        </form>
        <aside>
          <img
            src="../../images/main logo2.png"
            alt=""
            className={personalInfoStyles.yStripe}
          />
          <img src="../../images/scan2.png" alt="people picture" />
        </aside>
      </div>
      <p className={personalInfoStyles.timedWarning}>{message}</p>
    </section>
  );
};

export default PersonalInfo;
