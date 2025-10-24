import styles from './Text.module.css'

function Text() {
  return (
    <section className={styles.textBox}>

        <h1 className={styles.textTitle}>Number Guesser</h1>
              <div className={styles.leftText}>
        <h3 className={styles.textSubtitle}>Guess What is The Computer is Thinking</h3>

        
      </div>
      <div className={styles.instructionsText}>

        <p>1: Enter The Number You Are Thinking Below</p>
        <p>2: See the List On The Right For Previous Mind Readings</p>
      </div>
    </section>
  );
}

export default Text;
