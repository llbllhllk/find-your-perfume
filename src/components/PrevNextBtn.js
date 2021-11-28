import styles from '../assets/styles/PrevNextBtn.module.css';

function PrevNextBtn () {
  return ( 
    <div className={styles.btnContainer}>
      <button className={styles.btn}>BACK</button>      
      <button className={styles.btn}>NEXT</button>      
    </div>
  );
}

export default PrevNextBtn;