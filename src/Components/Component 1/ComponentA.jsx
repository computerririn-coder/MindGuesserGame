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

  return (
    <section className={styles.componentContainer}>
      <h2>
        I'm Thinking Of A Number Between {currentNumber} And {currentNumber + 2}
      </h2>

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
    </section>
  );
}

export default ComponentA;
