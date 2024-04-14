import {FC} from "react"
import TodoItem from "./TodoItem"
import {ITodoValue} from "./Todo"
import {AnimatePresence} from "framer-motion"

interface ITodoListProps {
   todos: ITodoValue[]
   handleRemoveTodo: (id: number) => void
}

const TodoList: FC<ITodoListProps> = ({todos, handleRemoveTodo}) => {
   return (
      <div id="todo-list">
         <AnimatePresence mode="popLayout">
            {todos.map(todo => (
               <TodoItem
                  key={todo.id}
                  handleRemoveTodo={handleRemoveTodo}
                  {...todo}
               />
            ))}
         </AnimatePresence>
      </div>
   )
}

export default TodoList
