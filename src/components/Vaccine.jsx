import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import useWarning from "../hooks/useWarning";
import useInputRadio from "../hooks/useInputRadio";
import RadioInputs from "../generalLayouts/RadioInputs";
import Header from "../generalLayouts/Header";
import vaccineStyles from "./vaccine.module.css";
import data from "../data/data";

const Vaccine = () => {
  const navigate = useNavigate();
  const { message, setMessage } = useWarning("");

  const { changeHandler, value, formIsValid, showTest } = useInputRadio("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className={vaccineStyles.section}>
      <Header page="3" />
      <div className={vaccineStyles.formWrapper}>
        <form autoComplete="off" onSubmit={handleSubmit}>
          {/* <RadioInputs
            props={data[2]}
            title="უკვე აცრილი ხარ?*"
            changeHandler={changeHandler}
          />
          <RadioInputs
            props={data[3]}
            title="აირჩიე რა ეტაპზე ხარ*"
            changeHandler={changeHandler}
          />
          <RadioInputs
            props={data[4]}
            title="რას ელოდები?*"
            changeHandler={changeHandler}
          /> */}
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
