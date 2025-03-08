import { useState } from "react"
import React from "react"
import TodoInputBox from "../components/TodoInputBox"
import SelectFetchCategory from "../components/SelectFetchCategory"
import OpenTaskInputButton from "../components/OpenTaskInputButton"
const AddTodoContainer :React.FC= () => {
  const [openAddTask,setopenAddTask]=useState(false);
  const toggleaddTask=()=>{
    setopenAddTask(!openAddTask)
  }
  return (
    <div>
      <div className='flex justify-between p-4'>
        <OpenTaskInputButton toggle={toggleaddTask} open={openAddTask}/>
        <SelectFetchCategory/>
      </div>
      {openAddTask && <TodoInputBox toggle={toggleaddTask}/>}
    </div>
  )
}

export default AddTodoContainer
