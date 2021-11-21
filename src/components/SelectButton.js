import styles from '../assets/styles/SelectButton.module.css';


function SelectButton() {
  return (
    <button className={[styles.btn, styles.active].join(' ')}>START VIRTUAL CONSULTATION</button>
  );
}

export default SelectButton