//this is the component that includes just texts ,can be founf on top of component 1

import styles from './Text.module.css'

function Text() {
  return (
    <header className={styles.text}>
      <h1 className="text-title">Number Guesser</h1>
      <h4 className="text-subtitle">I Will Guess Your Mind</h4>
      <h5 className="text-instruction">Enter What You’re Thinking</h5>
    </header>
  );
}

export default Text;
