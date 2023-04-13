import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import useWarning from "../hooks/useWarning";
import useInputRadio from "../hooks/useInputRadio";
import useInput from "../hooks/useInput";
import Input from "../generalLayouts/Input";
import RadioInputs from "../generalLayouts/RadioInputs";
import Header from "../generalLayouts/Header";
import vaccineStyles from "./vaccine.module.css";

const Vaccine = () => {
  const navigate = useNavigate();
  const { message, setMessage } = useWarning("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className={vaccineStyles.section}>
      <Header page="3" />
      <div className={vaccineStyles.formWrapper}>
        <form autoComplete="off" onSubmit={handleSubmit}>
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
