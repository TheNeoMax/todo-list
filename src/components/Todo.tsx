import {useState} from "react"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

export interface ITodoValue {
   id: number
   value: string
}

const Todo = () => {
   const [todos, setTodo] = useState<ITodoValue[]>([])

   const handleAddTodo = (value: string) => {
      setTodo(prev => [
         ...prev,
         {id: Math.round(Math.random() * 10000000), value}
      ])
   }

   const handleRemoveTodo = (id: number) => {
      setTodo(prev => prev.filter(todo => todo.id !== id))
   }

   return (
      <div>
         <TodoForm handleAddTodo={handleAddTodo} />
         <TodoList todos={todos} handleRemoveTodo={handleRemoveTodo} />
      </div>
   )
}

export default Todo
