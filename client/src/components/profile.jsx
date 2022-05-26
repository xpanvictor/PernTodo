import React from 'react'
import Card from './card'

function Profile(props) {
  return (
    <Card w={props.w}>
        <div className="card-title">Your timeline</div>
        <div className="card-body">
        <div className="flex flex-col md:flex-row flex-row-inverse justify-between">
            <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":props.prog}}>
                {props.prog}%
            </div>
            <Timer />
        </div>
        <div>
            <div className="badge badge-primary">Most important</div>
            <ul className="bg-primary py-0 list-none">
                <li className='grid grid-flow-col p-1 mt-1 mb-0'>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                    <div className="font-bold">Brice Swyre</div>
                </li>
                <li className='grid grid-flow-col p-1 mt-1 mb-0'>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                    <div className="font-bold">Brice Swyre</div>
                </li>
            </ul>
        </div>
        </div>
    </Card>
  )
}

function Timer(props) {
    return (
    <div className="grid grid-flow-col gap-1 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-primary rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
            <span style={{"--value":3}}></span>
        </span>
        days
        </div> 
        <div className="flex flex-col p-2 bg-primary rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
            <span style={{"--value":3}}></span>
        </span>
        hours
        </div> 
        <div className="flex flex-col p-2 bg-primary rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
            <span style={{"--value":3}}></span>
        </span>
        min
        </div> 
        <div className="flex flex-col p-2 bg-primary rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
            <span style={{"--value":3}}></span>
        </span>
        sec
        </div>
    </div>
    )
}

export default Profile