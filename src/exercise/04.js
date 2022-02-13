// Prop Collections and Getters
// http://localhost:3000/isolated/exercise/04.js

import * as React from 'react'
import {Switch} from '../switch'

function useToggle() {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  // 🐨 Add a property called `togglerProps`. It should be an object that has
  // `aria-pressed` and `onClick` properties.
  // 💰 {'aria-pressed': on, onClick: toggle}

  function getTogglerProps({onClick, ...props}){
    return {
      'aria-pressed': on,
      onClick: onClick ? onClick: toggle,
      ...props
    }
  }

  return {on, toggle, getTogglerProps}
}

function App() {
  const {on, getTogglerProps, toggle} = useToggle()
  return (
    <div>
      <Switch {...getTogglerProps({on})} />
      <hr />
      <button {...getTogglerProps({
        'aria-label':"custom-button"
      })}>
        {on ? 'on' : 'off'}
      </button>
      {/* <button aria-label="custom-button" {...togglerProps} onClick={() => console.info("onButtonClick")}>
        {on ? 'on' : 'off'}
      </button> */}
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
