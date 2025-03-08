import { Dispatch, SetStateAction } from "react";
import React from "react";
interface Props{
  setcatagory: Dispatch<SetStateAction<string>>;
}

const SelectInputCategory :React.FC<Props>= ({setcatagory}) => {
  return (
    <div>
      <select className="rounded-xl p-2" onChange={(e)=>{
         setcatagory(e.target.value)
      }} defaultValue="incompleted" aria-label="selectinputcategory">
      <option value="incompleted">Incompleted</option>
      <option value="completed">Completed</option>
    </select>
    </div>
  )
}

export default SelectInputCategory
