import React, { useContext } from 'react'
import { TodoContext } from '../context/todo';


import { Nav } from '../components'

function Main(props) {
  const {theme, setTheme} = useContext(TodoContext);
  const handleTheme = () => {
      setTheme((theme==='dark') ? 'light' : 'dark')
  }
  return (
      <div data-theme={theme} className='h-screen'>
          <Nav theme={theme} handleTheme={handleTheme} />
          {props.children}
          <div className="">Footer</div>
      </div>    
  )
}

export default Main