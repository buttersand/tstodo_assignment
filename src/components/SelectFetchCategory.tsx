import React, { useContext } from "react"
import { ConText } from "../context/AppContext"

const SelectFetchCategory :React.FC= () => {
  const { settype } = useContext(ConText);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    settype(e.target.value);
  }
  return (
    <select className="rounded-xl p-2" onChange={handleChange} aria-label="selectfetchcategory" defaultValue="all">
      <option value="all" data-testid="selectfetchoption">All</option>
      <option value="incompleted" data-testid="selectfetchoption">Incompleted</option>
      <option value="completed" data-testid="selectfetchoption">Completed</option>
    </select>
  )
}

export default SelectFetchCategory
