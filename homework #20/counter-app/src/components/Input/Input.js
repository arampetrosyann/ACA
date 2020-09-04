import React from "react";
import styles from "./Input.module.css";
import PropTypes from "prop-types";

export default function Input(props) {
  return (
    <input
      className={styles.input}
      type="number"
      placeholder={props.inText}
      min={props.minVal}
      onChange={props.onChange}
    />
  );
}

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minVal: PropTypes.number,
};
