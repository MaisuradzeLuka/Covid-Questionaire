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
import { useState } from "react";

const CovidPolitics = () => {
  const navigate = useNavigate();
  const { message, setMessage } = useWarning("");
  const [selectedOption, setSelectedOption] = useState({
    option1: false,
    option2: false,
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    if (name === "meetingFrequency") {
      selectedOption.option1 = true;
    } else {
      selectedOption.option1 = false;
    }
  };

  const changeHandler2 = (e) => {
    const name = e.target.name;
    if (name === "officeWork") {
      selectedOption.option2 = true;
    } else {
      selectedOption.option2 = false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedOption.option1 && selectedOption.option2) {
      navigate("/thankYou", { replace: true });
    } else {
      setMessage("გთხოვთ შეავსოთ სავალდებულო ველები");
    }
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
            changeHandler={changeHandler}
          />
          <RadioInputs
            props={data[6]}
            title="კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*"
            changeHandler={changeHandler2}
          />

          <div className={covidStyles.inputWrapper}>
            <label htmlFor="meetings">რას ფიქრობ ფიზიკურ შეკრებებზე?</label>
            <textarea
              name="meetings"
              id="meetings"
              cols="30"
              rows="10"
              className={covidStyles.input}
            ></textarea>
          </div>
          <div className={covidStyles.inputWrapper}>
            <label htmlFor="enviroments">
              რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას
              შეცვლიდი?
            </label>
            <textarea
              name="enviroments"
              id="enviroments"
              cols="30"
              rows="10"
              className={covidStyles.input}
            ></textarea>
          </div>
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
