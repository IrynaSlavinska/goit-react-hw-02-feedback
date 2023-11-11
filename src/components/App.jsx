import { Component } from 'react';
import Statistics from './Feedback/Statistics';
import FeedbackOptions from './Feedback/FeedbackOptions';
// import Notification from './Feedback/Notification';
import css from './Feedback/Feedback.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = button => {
    // this.setState(prevState => {
    //   return {
    //     [button]: prevState.button + 1,
    //   };
    // });
  };

  // countTotalFeedback = () => {
  //   return { total: this.state.good + this.state.neutral + this.state.bad };
  // };

  // countPositiveFeedbackPercentage = () => {
  //   return {
  //     percentage: Math.round((this.state.good / this.total) * 100) + '%',
  //   };
  // };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;
    return (
      <div className={css.feedback}>
        <h2 className={css.feedbackTitle}>Please leave feedback</h2>

        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />

        <h2 className={css.feedbackTitle}>Statistics</h2>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </div>
    );
  }
}

export default App;
