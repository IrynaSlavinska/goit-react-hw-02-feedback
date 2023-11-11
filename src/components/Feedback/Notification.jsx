import css from './Feedback.module.css';

const Notification = ({ message }) => {
  return <p className={css.feedbackStat}>{message}</p>;
};

export default Notification;
