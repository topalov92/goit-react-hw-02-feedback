import React from "react";
import PropTypes from "prop-types";
import style from "./Section.module.css";

export const Section = ({ title, children }) => {
  return (
    <>
      <h2 className={style.mainTitle}>{title}</h2>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
