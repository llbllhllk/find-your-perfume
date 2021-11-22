import Reset from './assets/styles/Reset.css';
import styles from './assets/styles/App.module.css';
import Logo from './components/Logo.js';
import Start from './routes/Start.js';
import FirstStep from './routes/FirstStep.js';


function App() {
  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <FirstStep />
      </div>
    </div>
  );
}

export default App;
