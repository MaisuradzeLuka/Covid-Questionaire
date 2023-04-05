import { Link } from "react-router-dom";
import welcomeStyles from "./welcomeStyles.module.css";

const Welcome = () => {
  return (
    <section className={welcomeStyles.section}>
      <img src="./images/main logo.png" alt="" />
      <Link to="/personalInfo">
        <h2>კითხვარის დაწყება</h2>
      </Link>
    </section>
  );
};

export default Welcome;
