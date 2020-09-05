import React from "react";
import styles from "./Input.module.css";
import PropTypes from "prop-types";

export default function Input(props) {
  return (
    <input
      className={styles.input}
      type={props.type}
      value={props.value}
      name={props.name}
      placeholder={props.holder}
      onChange={props.onChange}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  holder: PropTypes.string,
  onChange: PropTypes.func,
};
