import styles from '../assets/styles/PrevNextBtn.module.css';

function PrevNextBtn ({ prevStep, nextStep }) {
  return ( 
    <div className={styles.btnContainer}>
      <button 
        className={styles.btn}
        onClick={prevStep}
      >
        BACK
      </button>      
      <button 
        className={styles.btn}
        onClick={nextStep}
      >
        NEXT
      </button>      
    </div>
  );
}

export default PrevNextBtn;