import styles from '../assets/styles/SelectButton.module.css';


function SelectButton({ text, nextStep }) {
  return (
    <button 
      className={[styles.btn, styles.active].join(' ')}
      onClick={nextStep}
    >{text}</button>
  );
}

export default SelectButton