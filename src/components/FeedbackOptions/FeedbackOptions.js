import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const types = Object.keys(options);
  return (
    <ul className={styles.list}>
      {types.map((type) => (
        <li key={type}>
          <button
            className={styles.listButton}
            type="button"
            onClick={onLeaveFeedback}
            name={type}
          >
            {type}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
