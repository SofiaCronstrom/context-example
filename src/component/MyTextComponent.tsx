import { useContext } from "react";
import { TextContext } from "../context/TextContext";
import { MyOtherTextComponent } from "./MyOtherTextComponent";

export const MyTextComponent = () => {
  const textContext = useContext(TextContext);

  

  return (
      <>
      <h3>Child component</h3>
      <p>{textContext?.text}</p>
      <MyOtherTextComponent />
    </>
  )
  };
