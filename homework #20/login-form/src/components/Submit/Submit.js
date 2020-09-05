import React from "react";
import styles from "./Submit.module.css";
import PropTypes from "prop-types";

export default function Submit(props) {
  return (
    <input
      className={styles.submit}
      type="submit"
      value={props.value}
      disabled={props.disabled}
      onClick={props.onClick}
    />
  );
}

Submit.propTypes = {
  value: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
