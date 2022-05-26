import React from 'react'

function Card(props) {
  return (
    <div className={`card w-auto bg-base-100 shadow-xl`}>
        {props.children}
    </div>
  )
}

export default Card