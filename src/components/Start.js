import Logo from './Logo.js';
import StartButton from './StartButton.js';
import styles from '../assets/styles/Start.module.css';

function Start({ nextStep }) {
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
      <StartButton 
        text={'START VIRTUAL CONSULTATION'} 
        nextStep={nextStep}
      />
    </>
  );
}

export default Start