import React from "react";
import PropTypes from "prop-types";
import style from "./FeedbackOption.module.css";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div className={style.buttonContainer}>
        {options.map((option) => {
          return (
            <button
              key={option}
              type="button"
              className={style.button}
              onClick={onLeaveFeedback}
            >
              {option}
            </button>
          );
        })}
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
