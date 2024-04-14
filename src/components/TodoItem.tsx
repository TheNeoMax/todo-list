import {FC} from "react"
import {ITodoValue} from "./Todo"
import {motion} from "framer-motion"

interface ITodoItem extends ITodoValue {
   handleRemoveTodo: (id: number) => void
}

const TodoItem: FC<ITodoItem> = ({id, value, handleRemoveTodo}) => {
   const handleDelete = () => {
      handleRemoveTodo(id)
   }

   return (
      <motion.div
         id="todo-item"
         layout
         initial={{opacity: 0, x: -400, scale: 0.5}}
         animate={{opacity: 1, x: 0, scale: 1}}
         exit={{opacity: 0, x: 200, scale: 1.2}}
         transition={{duration: 0.6, type: "spring"}}
      >
         <span>{value}</span>
         <button id="todo-item-button" onClick={handleDelete}>
            Delete
         </button>
      </motion.div>
   )
}

export default TodoItem
