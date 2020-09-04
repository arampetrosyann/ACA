import React from "react";
import styles from "./Display.module.css";
import PropTypes from "prop-types";

export default function Display(props) {
  return <section className={styles.display}>{props.text}</section>;
}

Display.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
