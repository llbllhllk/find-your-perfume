import styles from '../assets/styles/StepThree.module.css';

function StepThree() {
  return (
    <ul>
      <div className={styles.notes}>
        <li className={styles.note}>
          <img src="/img/note/musk.jpg" alt="musk"></img>
        </li>
        <li className={styles.note}>
          <img src="/img/note/sweet.jpg" alt="sweet"></img>
        </li>
        <li className={styles.note}>
          <img src="/img/note/citrus.jpg" alt="citrus"></img>
        </li>
      </div>
      <div className={styles.notes}>
        <li className={styles.note}>
          <img src="/img/note/mint.jpg" alt="mint"></img>
        </li>
        <li className={styles.note}>
          <img src="/img/note/watery.jpg" alt="watery"></img>
        </li>
        <li className={styles.note}>
          <img src="/img/note/flower.jpg" alt="flower"></img>
        </li>
      </div>
      <div className={styles.notes}>
        <li className={styles.note}>
          <img src="/img/note/rose.jpg" alt="rose"></img>
        </li>
        <li className={styles.note}>
          <img src="/img/note/green.jpg" alt="green"></img>
        </li>
        <li className={styles.note}>
          <img src="/img/note/oudy.jpg" alt="oudy"></img>
        </li>
      </div>
    </ul>
  )
}

export default StepThree;