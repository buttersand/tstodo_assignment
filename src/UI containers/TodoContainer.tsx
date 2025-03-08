import React from "react"
import { useContext } from "react"
import { ConText } from "../context/AppContext"
import { todoSchema } from "../interfaces/interface"
import TodoItem from "../components/TodoItem"
import ButtonWrapper from "../components/ButtonWrapper"

const TodoContainer :React.FC = () => {
  const { todos } = useContext(ConText)
  return (
    <div>
      { /* check if ant todo exist */ }
      {todos.length>0 ?
        todos?.map((todo: todoSchema, index: number) => (
          <TodoItem key={index} title={todo.title} date={todo.date} time={todo.time} completed={todo.completed} id={todo.id} />
        )) :
        <div className="flex items-center justify-center gap-4 p-4 bg-[#94ADD7] bg-opacity-40 rounded-xl my-3">
          <ButtonWrapper>
            No Todos
          </ButtonWrapper>
        </div>}
    </div>
  )
}

export default TodoContainer
