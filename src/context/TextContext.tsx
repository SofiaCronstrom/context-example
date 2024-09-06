import { Context, createContext } from "react";

interface IContextType{
    text: string;
    setText: (value: string) => void;
}
export const TextContext :Context<IContextType | null> = createContext<IContextType | null>(null);