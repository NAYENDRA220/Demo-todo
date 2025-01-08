import {createContext, Dispatch} from"react";
export type Todo={
    title: string,
    descryption:string,
    photo:string,
}
type TodoContextType={
    todos:Todo[],
    setTodo:(todos :Todo[]) =>void
} 
const initialValue: Todo[] =[]
export const TodoContext =createContext<TodoContextType>({
    todos:initialValue,
   setTodo:() => {},
})
