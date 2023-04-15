import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import useWarning from "../hooks/useWarning";
import useInputRadio from "../hooks/useInputRadio";
import RadioInputs from "../generalLayouts/RadioInputs";
import Input from "../generalLayouts/Input";
import useInput from "../hooks/useInput";
import Header from "../generalLayouts/Header";
import covidStyles from "./covidPolitics.module.css";
import data from "../data/data";

const CovidPolitics = () => {
  const navigate = useNavigate();
  const { message, setMessage } = useWarning("");

  const { changeHandler, value, formIsValid, showTest } = useInputRadio("");

  const {
    inputValue: nameValue,
    onChangeHandler: nameChangeHandler,
    hasError: nameInputClass,
    inputValidation: nameIsValid,
    onBlurHandler: nameBlurHandler,
  } = useInput(() => {});

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className={covidStyles.section}>
      <Header page="4" />
      <div className={covidStyles.formWrapper}>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className={covidStyles.textWrapper}>
            <p style={{ marginBottom: "50px" }}>
              რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
              რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა
              წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის
              კი — ჩვენთან გადმოსვლის.
            </p>
            <p>
              პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
              ყოველდღიური კომუნიკაციაც გაიშვიათდა.
            </p>
          </div>
          <RadioInputs
            props={data[5]}
            title="რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*"
            // changeHandler={changeHandler}
          />
          <RadioInputs
            props={data[6]}
            title="კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*"
            // changeHandler={changeHandler}
          />
          <Input
            name={"რას ფიქრობ ფიზიკურ შეკრებებზე?"}
            id={"name"}
            type={"text"}
            // value={nameValue}
            // onChange={nameChangeHandler}
            // onBlur={nameBlurHandler}
            // className={nameInputClass}
          />
          <Input
            name={
              "რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?"
            }
            id={"name"}
            type={"text"}
            // value={nameValue}
            // onChange={nameChangeHandler}
            // onBlur={nameBlurHandler}
            // className={nameInputClass}
          />
          <div className={covidStyles.btnWrapper}>
            <Link to="/vaccine" className={covidStyles.btn}>
              <AiOutlineLeft className={covidStyles.icon} />
            </Link>
            <button type="submit" className={covidStyles.btn}>
              <AiOutlineRight className={covidStyles.icon} />
            </button>
          </div>
        </form>
        <aside>
          <img src="../../images/main logo5.png" className={covidStyles.logo} />
          <img src="../../images/bike2 1.png" />
        </aside>
      </div>
      <p className={covidStyles.timedWarning}>{message}</p>
    </section>
  );
};

export default CovidPolitics;
