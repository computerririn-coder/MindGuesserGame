



import { useState, createContext } from "react";
import ConditionalText from "./ConditionalText";
import { Validation } from "./Validation"; 
export const InputValueContext = createContext();

function ComponentA() {
  const [inputValue, setInputValue] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  function handleInputChange(event){
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
  }

  return (
    <div className="component-container">
      <input
        type="text"
        className="input-field"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <button className="submit-button" onClick={handleResult}>Submit</button>
      {error && <p className="error-text">{error}</p>}
      <InputValueContext.Provider value={inputValue}>
        <ConditionalText isTrue={show} />
      </InputValueContext.Provider>
    </div>
  );
}

export default ComponentA;
