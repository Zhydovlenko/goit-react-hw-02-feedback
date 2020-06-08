import React, { Component } from "react";
import PropTypes from "prop-types";
import Notification from "../Notification/Notification";
import styles from "./Statistics.module.css";

export default class Statistics extends Component {
  static propTypes = {
    statistics: PropTypes.objectOf(PropTypes.number).isRequired,
  };

  options = Object.keys(this.props.statistics);

  countTotalFeedback = () =>
    this.options.reduce(
      (acc, option) => this.props.statistics[option] + acc,
      0
    );

  countPositiveFeedbackPercentage = () =>
    `${Math.round(
      (this.props.statistics.good / this.countTotalFeedback()) * 100
    )}%`;

  render() {
    const { statistics } = this.props;

    const statisticsList = {
      ...statistics,
      total: this.countTotalFeedback(),
      "Positive feedback": this.countPositiveFeedbackPercentage(),
    };

    const optionList = Object.keys(statisticsList);

    return (
      <>
        {statisticsList.total !== 0 ? (
          <ul className={styles.statisticsList}>
            {optionList.map((option) => (
              <li className={styles.itemList} key={option}>
                {option}: {statisticsList[option]}
              </li>
            ))}
          </ul>
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    );
  }
}
