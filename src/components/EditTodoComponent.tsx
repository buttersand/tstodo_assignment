import { BsArrowDownRightCircleFill } from "react-icons/bs"
import ButtonWrapper from "./ButtonWrapper"
import React from "react";
interface Props{
         handleUpdate:()=> void;
         setCurrenttitle:(i:string)=> void;
         currentTitle:string
}
const EditTodoComponent :React.FC<Props> = ({handleUpdate,setCurrenttitle,currentTitle}) => {
  const handlekeyPress=(e: React.KeyboardEvent<HTMLInputElement>)=>{
    if(e.key=='Enter'){
      handleUpdate()
    }
  }
  return (
         <div className='flex justify-between w-full items-center'>
         <div>
           <input type="text" value={currentTitle} onChange={(e) => {
             setCurrenttitle(e.target.value)
           }} className='bg-white bg-opacity-40 p-2 outline-none text-black ' onKeyDown={handlekeyPress} aria-label="edit-todo"/>
         </div>
         <div>
           <ButtonWrapper toggle={handleUpdate}>
             <BsArrowDownRightCircleFill data-testid="callupdate"/>
           </ButtonWrapper>
         </div>
       </div>
  )
}

export default EditTodoComponent
