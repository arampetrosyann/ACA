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
      onInput={props.onInput}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  holder: PropTypes.string,
  onInput: PropTypes.func,
};
