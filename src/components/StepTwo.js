import SelectButton from "../components/SelectButton";
import styles from '../assets/styles/StepTwo.module.css';

function StepTwo({ nextStep }) {
  return (
    <ul className={styles.ul}>
        <li className={styles.list}>
          <SelectButton
            text={'DAILY'}
            nextStep={nextStep}
          />
        </li>
        <li className={styles.list}>
          <SelectButton 
            text={'IMPORTANT'} 
            nextStep={nextStep}
          />
        </li>
      </ul>
  );
}

export default StepTwo;