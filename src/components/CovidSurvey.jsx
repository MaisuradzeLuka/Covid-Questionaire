import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import useWarning from "../hooks/useWarning";
import useInputRadio from "../hooks/useInputRadio";
import useInput from "../hooks/useInput";
import Input from "../generalLayouts/Input";
import RadioInputs from "../generalLayouts/RadioInputs";
import Header from "../generalLayouts/Header";
import data from "../data/data";
import covidStyles from "./covidSurvey.module.css";

const CovidSurvey = () => {
  const navigate = useNavigate();
  const { message, setMessage } = useWarning("");

  const {
    inputValue: dateValue,
    onChangeHandler: dateChangeHandler,
    hasError: dateInputClass,
    inputValidation: dateIsValid,
    onBlurHandler: dateBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    inputValue: numValue,
    onChangeHandler: numChangeHandler,
    hasError: numInputClass,
    inputValidation: numIsValid,
    onBlurHandler: numBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    inputValue: antiBodysValue,
    onChangeHandler: antiBodysChangeHandler,
    hasError: antiBodysInputClass,
    inputValidation: antiBodysIsValid,
    onBlurHandler: antiBodysBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const { changeHandler, value, formIsValid, showTest } = useInputRadio(
    antiBodysIsValid,
    dateIsValid,
    numIsValid
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formIsValid) {
      navigate("/vaccine", { replace: true });
    } else {
      setMessage("გთხოვთ შეავსოთ სავალდებულო ველები");
    }
  };

  return (
    <section className={covidStyles.section}>
      <Header page="2" />
      <div className={covidStyles.formWrapper}>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <RadioInputs
            props={data[0]}
            title="გაქვს გადატანილი Covid-19?*"
            changeHandler={changeHandler}
          />
          {showTest && (
            <RadioInputs
              props={data[1]}
              title="ანტისხეულების ტესტი გაქვს გაკეთებული?*"
              changeHandler={changeHandler}
            />
          )}
          {value === "hadTest" && (
            <div>
              <p className={covidStyles.numInputWrapper}>
                თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და
                ანტისხეულების რაოდენობა*
              </p>
              <Input
                id="number"
                type="number"
                placeholder="რიცხვი"
                value={numValue}
                onChange={numChangeHandler}
                onBlur={numBlurHandler}
                className={numInputClass}
                text="გთხობთ გამოიყენოთ მხოლოდ რიცხვები"
              />
              <Input
                id="number"
                type="number"
                placeholder="ანტისხეულების რაოდენობა"
                value={dateValue}
                onChange={dateChangeHandler}
                onBlur={dateBlurHandler}
                className={dateInputClass}
                text="გთხობთ გამოიყენოთ მხოლოდ რიცხვები"
              />
            </div>
          )}
          {value === "hadntTest" && (
            <>
              <p className={covidStyles.numInputWrapper}>
                მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა
                Covid-19*
              </p>
              <Input
                id="date"
                type="date"
                placeholder="ანტისხეულების რაოდენობა"
                value={antiBodysValue}
                onChange={antiBodysChangeHandler}
                onBlur={antiBodysBlurHandler}
                className={antiBodysInputClass}
                text="გთხობთ გამოიყენოთ მხოლოდ რიცხვები"
              />
            </>
          )}
          <div className={covidStyles.btnWrapper}>
            <Link to="/personalInfo" className={covidStyles.btn}>
              <AiOutlineLeft className={covidStyles.icon} />
            </Link>
            <button type="submit" className={covidStyles.btn}>
              <AiOutlineRight className={covidStyles.icon} />
            </button>
          </div>
        </form>
        <aside>
          <img src="../../images/main logo3.png" className={covidStyles.logo} />
          <img src="../../images/vaccinate2.png" />
        </aside>
      </div>
      <p className={covidStyles.timedWarning}>{message}</p>
    </section>
  );
};

export default CovidSurvey;
