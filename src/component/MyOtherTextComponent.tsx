import { useContext, useEffect } from "react";
import { TextContext } from "../context/TextContext";

export const MyOtherTextComponent = () => {
  const textContext = useContext(TextContext);

  useEffect(() => {
    if (textContext) {
      if (textContext.text === "hejhej") {
        textContext.setText("Välkommen");
      } 
    }
  }, [textContext]);

  // useEffect(() => {
  //     setTimeout(() => {
  //         textContext?.setText('nu har det gått 5 sekunder')
  //     }, 5000)
  // }, []);

  return (
    <>
      <h4>Child component in child component</h4>
      <p>{textContext?.text}</p>
    </>
  );
};
