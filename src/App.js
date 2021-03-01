import styles from './App.module.css';
import Shortcut from './components/Shortcut/Shortcut';

function App() {
  return (
    <div className={styles.Container}>
      <header className={styles.Title}>
        <h1>What shortcut ?</h1>
      </header>
      
      <div className={styles.Header}>
        <div className={styles.Name}>Name</div>
        <div className={styles.KeyBinding}>Key binding</div>
        <div className={styles.Description}>Description</div>
      </div>

      <div className={styles.ShortcutContainer}>
        <Shortcut></Shortcut>
      </div>
    </div>
  );
}

export default App;
