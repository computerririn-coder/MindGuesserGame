import { useState, useRef, createContext } from "react";
import ConditionalText from "./ConditionalText";
import { Validation } from "./Validation";
import styles from "./ComponentA.module.css";

export const InputValueContext = createContext();

function ComponentA({ inputArray, setInputArray }) {
  const [inputValue, setInputValue] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  function handleResult() {
    const userInput = inputRef.current.value;
    const errorMessage = Validation(userInput);

    if (errorMessage) {
      setError(errorMessage);
      setShow(false);
      return;
    }

    setError("");
    setShow(true);
    setInputArray([...inputArray, userInput]);
    setInputValue(userInput);

    inputRef.current.value = "";
  }

  return (
    <section className={styles.componentContainer}>
      <input
        ref={inputRef}
        type="text"
        className={styles.inputField}
        placeholder="Enter a number"
      />
      <button className={styles.submitButton} onClick={handleResult}>
        Submit
      </button>
      {error && <p className={styles.errorText}>{error}</p>}

      <InputValueContext.Provider value={inputValue}>
        <ConditionalText isTrue={show} />
      </InputValueContext.Provider>
    </section>
  );
}

export default ComponentA;
