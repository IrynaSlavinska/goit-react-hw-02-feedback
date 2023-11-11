import css from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.btnContainer}>
      {options.map((option, button) => {
        return (
          <button
            key={option}
            type="button"
            className={css.feedbackBtn}
            onClick={onLeaveFeedback(button)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;
