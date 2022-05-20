import React, { useContext } from 'react'
import { TodoContext } from '../context/todo';


import { Nav } from '../components'

function Main(props) {
  const {theme} = useContext(TodoContext);
  return (
      <div data-theme={theme} className='h-screen'>
          <Nav />
          {props.children}
          <div className="">Footer</div>
      </div>    
  )
}

export default Main