import css from './Feedback.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <ul className={css.feedbackList}>
        <li>
          <p className={css.feedbackStat}>
            Good: <span>{good}</span>
          </p>
        </li>
        <li>
          <p className={css.feedbackStat}>
            Neutral: <span>{neutral}</span>
          </p>
        </li>
        <li>
          <p className={css.feedbackStat}>
            Bad: <span>{bad}</span>
          </p>
        </li>
      </ul>
      <p>
        Total: <span>{total}</span>
      </p>
      <p>
        Positive feedback:
        <span>{positivePercentage}</span>
      </p>
    </div>
  );
};
export default Statistics;
