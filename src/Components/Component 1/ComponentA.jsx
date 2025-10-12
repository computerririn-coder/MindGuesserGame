



import { useState, createContext } from "react";
import ConditionalText from "./ConditionalText";
import { Validation } from "./Validation"; 
import styles from "./ComponentA.module.css";
export const InputValueContext = createContext();
export const inputArrayContext = createContext();
import List from "../Component 3/List";

function ComponentA() {
  const [inputValue, setInputValue] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [inputArray, setInputArray] = useState([]);
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleResult() {
    const errorMessage = Validation(inputValue);

    if (errorMessage) {
      setError(errorMessage);
      setShow(false);
      return;
    }

    setError("");
    setShow(prev => !prev);
    setInputArray([...inputArray, inputValue]);
    console.log(inputArray);
  }

  return (
    <>
    <section className={styles.componentContainer}>
      <input
        type="text"
        className={styles.inputField}
        value={inputValue}
        onChange={handleInputChange}
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
        <inputArrayContext.Provider value={inputArray}>
      <List/>
    </inputArrayContext.Provider>
    </>
  );
}

export default ComponentA;
