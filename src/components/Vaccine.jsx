import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import useWarning from "../hooks/useWarning";
import useInputRadio from "../hooks/useInputRadio";
import RadioInputs from "../generalLayouts/RadioInputs";
import Header from "../generalLayouts/Header";
import vaccineStyles from "./vaccine.module.css";
import data from "../data/data";
import { useState } from "react";

const Vaccine = () => {
  const navigate = useNavigate();
  const { message, setMessage } = useWarning("");
  const [showQuestion, setShowQuestion] = useState("");
  const [showLink, setShowLink] = useState("");
  const [value, setValue] = useState(false);

  let formIsValid = false;
  const changeHandler = (e) => {
    setShowQuestion(e.target.value);
    setShowLink("");
    sessionStorage.setItem(e.target.name, e.target.value);
  };

  const changeValidationHandler = (e) => {
    if (
      e.target.value === "onlyFirst" ||
      e.target.value === "alreadyHadCovid"
    ) {
      setValue(false);
      setShowLink(e.target.value);
    } else {
      setValue(true);
      setShowLink("");
    }
    console.log("g");
    sessionStorage.setItem(e.target.name, e.target.value);
  };

  formIsValid = value;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formIsValid) {
      navigate("/covidPolitics", { replace: true });
    } else {
      setMessage("გთხოვთ შეავსოთ სავალდებულო ველები");
    }
  };
  return (
    <section className={vaccineStyles.section}>
      <Header page="3" />
      <div className={vaccineStyles.formWrapper}>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <RadioInputs
            props={data[2]}
            title="უკვე აცრილი ხარ?*"
            changeHandler={changeHandler}
          />
          {showQuestion === "hadVaccine" && (
            <RadioInputs
              props={data[3]}
              title="აირჩიე რა ეტაპზე ხარ*"
              changeHandler={changeValidationHandler}
            />
          )}
          {showQuestion === "hadntVaccine" && (
            <RadioInputs
              props={data[4]}
              title="რას ელოდები?*"
              changeHandler={changeValidationHandler}
            />
          )}
          {showLink === "onlyFirst" && (
            <h3 className={vaccineStyles.linkWrapper}>
              რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი
              <Link
                to="https://booking.moh.gov.ge/"
                target="_blank"
                className={vaccineStyles.link}
              >
                {" "}
                https://booking.moh.gov.ge/
              </Link>
            </h3>
          )}
          {showLink === "alreadyHadCovid" && (
            <h3 className={vaccineStyles.linkWrapper2}>
              ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ
              ვაქცინის გაკეთება. 👉 რეგისტრაციის ბმული
              <Link
                to="https://booking.moh.gov.ge/"
                target="_blank"
                className={vaccineStyles.link}
              >
                {" "}
                https://booking.moh.gov.ge/
              </Link>
            </h3>
          )}
          <div className={vaccineStyles.btnWrapper}>
            <Link to="/covidSurvey" className={vaccineStyles.btn}>
              <AiOutlineLeft className={vaccineStyles.icon} />
            </Link>
            <button type="submit" className={vaccineStyles.btn}>
              <AiOutlineRight className={vaccineStyles.icon} />
            </button>
          </div>
        </form>
        <aside>
          <img
            src="../../images/main logo4.png"
            className={vaccineStyles.logo}
          />
          <img src="../../images/doctor2.png" />
        </aside>
      </div>
      <p className={vaccineStyles.timedWarning}>{message}</p>
    </section>
  );
};

export default Vaccine;
