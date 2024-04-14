import {ChangeEventHandler, FC, useState} from "react"

type THandleChange = ChangeEventHandler<HTMLInputElement> | undefined

interface ITodoFormProps {
   handleAddTodo: (value: string) => void
}

const TodoForm: FC<ITodoFormProps> = ({handleAddTodo}) => {
   const [value, setValue] = useState("")

   const handleChangeValue: THandleChange = e => {
      setValue(e.target.value)
   }

   const handleAddValue = () => {
      handleAddTodo(value)
      setValue("")
   }

   return (
      <div id="todo-form">
         <input value={value} onChange={handleChangeValue} />
         <button onClick={handleAddValue}>Add</button>
      </div>
   )
}

export default TodoForm
