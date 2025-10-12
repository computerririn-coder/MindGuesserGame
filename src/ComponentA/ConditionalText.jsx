

import { useContext } from "react";
import { InputValueContext } from "./ComponentA";

function ConditionalText(props) {
const inputValue = useContext(InputValueContext);

  return (
    <>
      {props.isTrue ? <p>Your Thinking Of: {inputValue}</p> : <p>Your Thinking Of: </p>}
    </>
  );
}

export default ConditionalText;

