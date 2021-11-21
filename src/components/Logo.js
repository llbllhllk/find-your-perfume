import styles from '../assets/styles/Logo.module.css';

function Logo() {
  return (
    <h1 className={styles.logo}>
      <img src="img/Fredericmalle-logo-2.webp" alt="fredericmalle logo" />
    </h1>
  );
}

export default Logo