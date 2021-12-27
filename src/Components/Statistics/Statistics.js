import React from "react";
import PropTypes from "prop-types";
import style from "./Statistics.module.css";

export const Statistics = (props) => {
  return (
    <ul className={style.List}>
      {Object.keys(props).map((data) => {
        return (
          <li className={style.TitleList} key={data}>
            <p>
              {data}:{" "}
              <span>
                {props[data]}
                {data === "positivePercentage" && "%"}
              </span>
            </p>
          </li>
        );
      })}
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
