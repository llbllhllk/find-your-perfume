import SelectButton from '../components/SelectButton';
import styles from '../assets/styles/StepOne.module.css';

function StepOne({  }) {
  return (
    <ul className={styles.ul}>
        <li className={styles.list}>
          <SelectButton
            text={'SPRING'}
          />
        </li>
        <li className={styles.list}>
          <SelectButton 
            text={'SUMMER'} 
          />
        </li>
        <li className={styles.list}>
          <SelectButton 
            text={'AUTUMN'} 
          />
        </li>
        <li className={styles.list}>
          <SelectButton 
            text={'WINTER'} 
          />
        </li>
      </ul>
  );
}

export default StepOne;