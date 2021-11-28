import styles from '../assets/styles/Question.module.css';

function Question ({ step, gauge, question }) {
  return (
    <>
      <strong className={styles.step}>
          STEP {step} / 3
        </strong>
        <div className={styles.gauge}>
          <span
            className={styles.current_gauge}
            style={{"width": `${gauge}px` }}
            aria-label={`${step} of step gagebar`}
          >
          </span>
        </div>
        <h1 className={styles.title}>
          {question}
        </h1>
    </>
  );
}

export default Question;