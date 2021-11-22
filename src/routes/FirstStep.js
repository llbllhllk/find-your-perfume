import Step from '../components/Step.js';
import styles from '../assets/styles/FirstStep.module.css';
import SelectButton from '../components/SelectButton';

function FirstStep() {
  return (
    <>
      <Step 
        step={"1"}
        gauge={500 / 3}
      />
      <SelectButton text={'SPRING'} />
      <SelectButton text={'SUMMER'} />
      <SelectButton text={'AUTUMN'} />
      <SelectButton text={'WINTER'} />
    </>
  );
}


export default FirstStep