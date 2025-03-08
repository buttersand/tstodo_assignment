interface Props{
  submit: ()=>void;
  toggle:()=> void
}
import React from "react";
const AddTaskButton :React.FC<Props>= ({submit,toggle}) => {
  return (
// {test case}
    <button className="bg-heading p-2 rounded-xl text-white" onClick={() => {submit()
      toggle()
    }}>Add Task</button>
  )
}

export default AddTaskButton