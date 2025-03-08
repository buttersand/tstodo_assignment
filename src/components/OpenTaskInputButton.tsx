import React from "react"
interface Props{
  toggle:()=> void,
  open:boolean
}
const OpenTaskInputButton :React.FC<Props>= ({toggle,open}) => {
  return (
    <button className="bg-heading p-2 rounded-xl text-white" onClick={() => {
      toggle()
    }}>{open ? 'Close' : 'Add Work'}</button>
  )
}

export default OpenTaskInputButton
