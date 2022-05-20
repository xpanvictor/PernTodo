import React from 'react'
import Card from './card'

function Profile(props) {
  return (
    <Card w={props.w}>
        <div className="card-title">Your timeline</div>
        <div className="card-body">
        <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":props.prog}}>
            {props.prog}%
        </div>
        </div>
    </Card>
  )
}

export default Profile