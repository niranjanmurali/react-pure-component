import React from 'react'
import Concept from './Components/Concept'
import SimpleCounterComponent from './Components/PureCounterComponent'
import PureCounterComponent from './Components/PureCounterComponent'
const App = () => {
  return (
    <>
      <SimpleCounterComponent/>
      <PureCounterComponent/>
    </>
  )
}

export default App