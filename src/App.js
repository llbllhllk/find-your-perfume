import Reset from './assets/styles/Reset.css';
import styles from './assets/styles/App.module.css';
import Test from './routes/Test.js';


function App() {
  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <Test />
      </div>
    </div>
  );
}

export default App;
