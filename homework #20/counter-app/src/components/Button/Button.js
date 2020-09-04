import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

export default function Button(props) {
  return (
    <button
      className={styles.button}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
