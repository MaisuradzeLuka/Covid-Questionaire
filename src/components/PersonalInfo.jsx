import React, { useContext } from "react";
import Header from "../generalLayouts/Header";
import personalInfoStyles from "./personalInfo.module.css";
import useInput from "../hooks/useInput";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context-API/context";

const PersonalInfo = () => {
  const { email, letters } = useContext(AuthContext);

  const {
    inputValue: nameValue,
    onChangeHandler: nameChangeHandler,
    hasError: nameInputClass,
    inputValidation: nameIsValid,
  } = useInput((value) => letters.test(value));

  const {
    inputValue: lastnameValue,
    onChangeHandler: lastnameChangeHandler,
    hasError: lastnameInputClass,
    inputValidation: lastNameIsValid,
  } = useInput((value) => letters.test(value));

  const {
    inputValue: emailValue,
    onChangeHandler: emailChangeHandler,
    hasError: emailInputClass,
    inputValidation: emailIsValid,
  } = useInput((value) => email.test(value));

  let formIsValid = false;

  if (emailIsValid && nameIsValid && lastNameIsValid) {
    formIsValid = true;
  }

  return (
    <section className={personalInfoStyles.section}>
      <Header page={"1"} />
      <div className={personalInfoStyles.formWrapper}>
        <form>
          <div className={personalInfoStyles.inputWrapper}>
            <label htmlFor="name">სახელი*</label>
            <input
              type="text"
              placeholder="თქვენი სახელი"
              id="name"
              value={nameValue}
              onChange={nameChangeHandler}
            />
            <p className={nameInputClass}>
              სახელი ველი უნდა შედგებოდეს 3 ან მეტი, ქართული სიმბოლოსგან
            </p>
          </div>
          <div className={personalInfoStyles.inputWrapper}>
            <label htmlFor="lastname">გვარი*</label>
            <input
              type="text"
              placeholder="თქვენი გვარი"
              id="lastname"
              value={lastnameValue}
              onChange={lastnameChangeHandler}
            />
            <p className={lastnameInputClass}>
              გვარი ველი უნდა შედგებოდეს 3 ან მეტი, ქართული სიმბოლოსგან
            </p>
          </div>
          <div className={personalInfoStyles.inputWrapper}>
            <label htmlFor="name">მეილი*</label>
            <input
              type="email"
              placeholder="თქვენი მეილი"
              id="email"
              value={emailValue}
              onChange={emailChangeHandler}
            />
            <p className={emailInputClass}>
              გთხოვთ გამოიყენოთ Redberry-ს მეილით (youremail@redberry.ge)
            </p>
          </div>
          <div className={personalInfoStyles.warning}>
            <p>*-ით მონიშნული ველების შევსება სავალდებულოა</p>
          </div>
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
      {formIsValid && (
        <Link to="/covidsurvey">
          <AiOutlineRight className={personalInfoStyles.icon} />
        </Link>
      )}
    </section>
  );
};

export default PersonalInfo;
