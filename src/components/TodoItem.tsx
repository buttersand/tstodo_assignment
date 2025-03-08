import React from 'react';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import ButtonWrapper from './ButtonWrapper';
import { todoSchema } from '../interfaces/interface';
import { useContext, useState } from 'react';
import { ConText } from '../context/AppContext';
import EditTodoComponent from './EditTodoComponent';
const TodoItem: React.FC<todoSchema> = ({ date, time, completed, title, id }) => {
  const [editTodo, setEditTodo] = useState(false);
  const [currenttitle, setCurrenttitle] = useState(title);
  const { deletetodo, updatetodo } = useContext(ConText)
  const setTitle=(value:string)=>{
    setCurrenttitle(value)
  }
  const handleUpdate=()=>{
    updatetodo(id,currenttitle)
    setEditTodo(!editTodo)
  }
  return (
    <div className='flex items-center gap-4 p-4 bg-[#94ADD7] bg-opacity-40 rounded-xl my-3'>
      {!editTodo ? (
        <>
          <div className='outline-none' onClick={() => {
            updatetodo(id)
          }}>
            <input type="checkbox" className='checkboxstyle' checked={completed} onChange={() => { }} data-testid="istaskcompleted"/>
          </div>
          <div>
            <h3 className='tracking-wide'>{completed ? <s>{title}</s> : <>{title}</>} </h3>
            <p className='text-gray-700'>{date}, {time}</p>
          </div>
          <div className='ml-auto flex gap-3 text-xl'>
            <ButtonWrapper toggle={() => deletetodo(id)}>
              <BsFillTrashFill data-testid="deletebutton"/>
            </ButtonWrapper>
            <ButtonWrapper toggle={() => setEditTodo(!editTodo)}>
              <BsFillPencilFill data-testid="edittodobutton" />
            </ButtonWrapper>
          </div>
        </>
      ) : (
      <EditTodoComponent setCurrenttitle={setTitle} handleUpdate={handleUpdate} currentTitle={currenttitle}/>
      )}


    </div>
  )
}

export default TodoItem
