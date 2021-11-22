import Reset from './assets/styles/Reset.css';
import styles from './assets/styles/App.module.css';
import Logo from './components/Logo.js';
import Start from './routes/Start.js';
import Step from './routes/Step.js';


function App() {
  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <Step />
      </div>
    </div>
  );
}

export default App;
