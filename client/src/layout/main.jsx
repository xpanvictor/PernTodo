import React, { useContext } from 'react'
import { TodoContext } from '../context/todo';


import { Nav, Footer } from '../components'

function Main(props) {
  const {theme, setTheme} = useContext(TodoContext);
  const handleTheme = () => {
      setTheme((theme==='dark') ? 'light' : 'dark')
  }
  return (
      <div data-theme={theme} className='relative md:h-screen'>
          <Nav theme={theme} handleTheme={handleTheme} />
          <div className="p-4">
            {props.children}
          </div>
          <Footer />
      </div>    
  )
}

export default Main