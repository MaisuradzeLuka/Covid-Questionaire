import React, { useContext } from "react";
import radioStyles from "./radioStyles.module.css";

const RadioInputs = ({ props, title, changeHandler }) => {
  return (
    <div className={radioStyles.radioWrapper}>
      <p>{title}</p>
      {props.map((elem, i) => {
        // console.log(sessionStorage.getItem(elem.name));
        // console.log(elem.value);
        const checked = sessionStorage.getItem(elem.name) === elem.value;
        return (
          <div key={i}>
            <label className={radioStyles.label}>
              <input
                type="radio"
                id={elem.name}
                name={elem.name}
                onChange={changeHandler}
                value={elem.value}
                checked={checked}
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
