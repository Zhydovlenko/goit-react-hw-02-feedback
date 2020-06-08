import React, { Component } from "react";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Section from "../Section/Section";

import "./App.module.css";

export default class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  leaveFeedback = (e) => {
    const type = e.currentTarget.name;

    this.setState((state) => {
      return {
        [type]: state[type] + 1,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics statistics={this.state}></Statistics>
        </Section>
      </div>
    );
  }
}
