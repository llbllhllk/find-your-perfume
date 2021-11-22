import styles from '../assets/styles/Question.module.css';

function Question ({ step, gauge }) {
  return (
    <>
      <strong className={styles.step}>
          STEP {step} / 3
        </strong>
        <div className={styles.gauge}>
          <span
            className={styles.current_gauge}
            style={{"width": `${gauge}px` }}
            aria-label="step1 gage"
          >
        </span>
        </div>
        <h1 className={styles.title}>
          선호하는 계절을 선택하세요.
        </h1>
    </>
  );
}

export default Question;