

import { useContext } from "react";
import { InputValueContext } from "./ComponentA";

function ConditionalText(props) {
  const inputValue = useContext(InputValueContext);

  return (
    <p className="conditional-text">
      {props.isTrue ? `You're Thinking Of: ${inputValue}` : "Your Thinking Of:"}
    </p>
  );
}

export default ConditionalText;
