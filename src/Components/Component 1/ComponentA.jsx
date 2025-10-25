import { useState, useRef, createContext } from "react";
import ConditionalText from "./ConditionalText";
import { Validation } from "./Validation";
import styles from "./ComponentA.module.css";

export const InputValueContext = createContext();

function ComponentA({ inputArray, setInputArray, currentNumber }) {
  const [latestGuess, setLatestGuess] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef(null);
const [difficultyIsClicked, setDifficultyIsClicked] = useState(false);
const [level, setLevel] = useState(null)
  function handleResult() {
    const userInput = inputRef.current.value;
    const validationError = Validation(userInput);

    if (validationError) {
      setError(validationError);
      setShowResult(false);
      return;
    }

    const isCorrect = Number(userInput) === currentNumber + 1;

    setError("");
    setShowResult(true);
    setInputArray([...inputArray, { value: userInput, isCorrect }]);
    setLatestGuess(userInput);

    inputRef.current.value = "";
  }

  function handleDifficultyClick(levelDifficulty){
    setDifficultyIsClicked(true);
    if(levelDifficulty == "easy") setLevel(2);
    if(levelDifficulty == "normal") setLevel(3);
    if(levelDifficulty == "hard") setLevel(4);
  }

 


  return (
    <section className={styles.componentContainer}>

      <div className={styles.difficultyContainer}>
        <div onClick={() => handleDifficultyClick("easy")} className={`${styles.difficultyBox} ${styles.difficultyBox1}`}>Easy Difficulty</div>
         <div onClick={() => handleDifficultyClick("normal")} className={`${styles.difficultyBox} ${styles.difficultyBox2}`}>Normal Difficulty</div>
          <div onClick={() => handleDifficultyClick("hard")} className={`${styles.difficultyBox} ${styles.difficultyBox3}`}>Hard Difficulty</div>
      </div>

      <div className={styles.inputRow}>
        <input
          ref={inputRef}
          type="text"
          className={styles.inputField}
          placeholder="Enter Your Guess"
        />
        <button className={styles.submitButton} onClick={handleResult}>
          Submit
        </button>
      </div>

      {error && <p className={styles.errorText}>{error}</p>}

      <InputValueContext.Provider value={latestGuess}>
        <ConditionalText isTrue={showResult} />
      </InputValueContext.Provider>
      {difficultyIsClicked &&(
      <h2>
        I'm Thinking Of A Number Between {currentNumber} And {currentNumber + level}
      </h2>
)}
    </section>
  );
}

export default ComponentA;
