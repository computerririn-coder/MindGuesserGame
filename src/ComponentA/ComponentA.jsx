



import { useState, createContext } from "react";
import ConditionalText from "./ConditionalText";
import { Validation } from "./Validation"; 
export const InputValueContext = createContext();


function ComponentA() {

const [inputValue, setInputValue] = useState();
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
    <>
    <div className="ComponentA">
       <input type="text" onChange={handleInputChange}/>
       <button onClick={handleResult}>submit</button>
       <p>{error}</p>
       <InputValueContext.Provider value={inputValue}>
         <ConditionalText isTrue={show}/>
       </InputValueContext.Provider>
        
    </div>
    </>
  );
}

export default ComponentA;
