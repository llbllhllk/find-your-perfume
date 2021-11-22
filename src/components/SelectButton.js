import styles from '../assets/styles/SelectButton.module.css';


function SelectButton({ text }) {
  return (
    <button 
      className={[styles.btn, styles.active].join(' ')}
    >{text}</button>
  );
}

export default SelectButton