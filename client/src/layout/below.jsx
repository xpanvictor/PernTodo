import React from 'react'

function Below(props) {
  return (
    <div className='mt-6 flex flex-row justify-center items-center'>
        {props.children}
    </div>
  )
}

export default Below