import { useState, useRef, createContext } from "react";
import ConditionalText from "./ConditionalText";
import { Validation } from "./Validation";
import List from "../Component 3/List";
import styles from "./ComponentA.module.css";

export const InputValueContext = createContext();
export const InputArrayContext = createContext();

function ComponentA() {
  const [inputValue, setInputValue] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [inputArray, setInputArray] = useState([]);
  const inputRef = useRef(null)

  function handleResult() {
    // use ref here to get input value
    // example: const userInput = inputRef.current.value;
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

 inputRef.current.value = ""
  }

  return (
    <>
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

      <InputArrayContext.Provider value={inputArray}>
        <List />
      </InputArrayContext.Provider>
    </>
  );
}

export default ComponentA;
