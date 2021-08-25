import React from 'react'
import './App.css'
import ClassCounter from './Components/ClassCounter'
import HookCounter from './Components/HookCounter'

/*
-RFCE reactFunctionalExportComponent
-add import of the ClassCounter component 
-add import of the HookCounter component
*/
function App() {
  return (
    <div className='App'>
      <h1>Class Counter using Class Component</h1>
      <ClassCounter />
      <h2>versus</h2>
      <h1>Hooks Counter using Functional Component with useState Hook</h1>
      <HookCounter />
      <h2>It looks the same here, but check the code. It's different!!!</h2>
    </div>
  )
}

export default App
