import SelectButton from '../components/SelectButton';
import styles from '../assets/styles/StepOne.module.css';

function StepOne({ nextStep }) {
  return (
    <ul className={styles.ul}>
        <li className={styles.list}>
          <SelectButton
            text={'SPRING'}
            nextStep={nextStep}
          />
        </li>
        <li className={styles.list}>
          <SelectButton 
            text={'SUMMER'} 
            nextStep={nextStep}
          />
        </li>
        <li className={styles.list}>
          <SelectButton 
            text={'AUTUMN'} 
            nextStep={nextStep}
          />
        </li>
        <li className={styles.list}>
          <SelectButton 
            text={'WINTER'} 
            nextStep={nextStep}  
          />
        </li>
      </ul>
  );
}

export default StepOne;