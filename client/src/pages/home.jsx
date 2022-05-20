import React from 'react'
import Top from '../layout/top'
import Below from '../layout/below'
import { NewTodo, Profile } from '../components'

function Home() {
  return (
    <React.Fragment>
      <Top>
        <NewTodo w='w-96' />
        <Profile w='w-auto' prog={45}/>
    </Top>
    
    <Below>
      <div className="overflow-x-auto">
      <ul class="steps steps-vertical md:steps-horizontal">
        <li class="step step-primary">Register</li>
        <li class="step step-primary">Choose plan</li>
        <li class="step">Purchase</li>
        <li class="step">Receive Product</li>
      </ul>
      </div>
    </Below>
    </React.Fragment>
  )
}

export default Home