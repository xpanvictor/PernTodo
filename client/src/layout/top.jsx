import React from 'react'

function Top(props) {
  return (
    <div className='flex md-flex-row justify-around'>
        {props.children}
    </div>
  )
}

export default Top