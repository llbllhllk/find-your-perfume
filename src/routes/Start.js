import Logo from '../components/Logo.js';
import SelectButton from '../components/SelectButton';
import styles from '../assets/styles/Start.module.css';

function Start() {
  return (
    <>
      <Logo />
      <blockquote className={styles.box}>
        <p className={styles.quotation}>
          “Perfume<br/>
          is the<br/>
          mirror of<br/>
          your soul.”
        </p>
        <cite className={styles.author}>
          — Frédéric Malle
        </cite>
        <p className={styles.description}>당신에게 어울리는 향수를 찾을 수 있도록 알려주세요.</p>
      </blockquote>
      <SelectButton text={'START VIRTUAL CONSULTATION'} />
    </>
  );
}

export default Start