import React from 'react'
import './App.css'
import Header from './components/Header'
import AddTodoContainer from './UI containers/AddTodoContainer'
import TodoContainer from './UI containers/TodoContainer'
import AppContext from './context/AppContext'

const App:React.FC=() =>{
  return (
    <div className='mx-auto max-w-2xl p-4 bg-background min-h-screen' data-testid="rootdiv">
<AppContext>
<Header/>
      <AddTodoContainer/>
      <TodoContainer/>
</AppContext>
    </div>
  )
}

export default App
