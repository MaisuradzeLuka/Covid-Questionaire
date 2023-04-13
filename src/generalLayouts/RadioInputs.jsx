import React, { useContext } from "react";
import radioStyles from "./radioStyles.module.css";

const RadioInputs = ({ props, title, changeHandler }) => {
  return (
    <div className={radioStyles.radioWrapper}>
      {title}
      {props.map((elem, i) => {
        return (
          <div key={i}>
            <label className={radioStyles.label}>
              <input
                type="radio"
                id={elem.name}
                name={elem.name}
                onChange={changeHandler}
                value={elem.value}
              />
              <span></span>
            </label>
            <label htmlFor={elem.mame}>{elem.text}</label>
          </div>
        );
      })}
    </div>
  );
};

export default RadioInputs;
