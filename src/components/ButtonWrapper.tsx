import { Props } from "../interfaces/interface";
import React from "react";
const ButtonWrapper: React.FC<Props> = ({children,toggle}) => {
  return (
         <button className='bg-gray-300 p-3 rounded-md' onClick={toggle}> {children}</button>
  )
}
export default ButtonWrapper
