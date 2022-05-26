import React, { useContext, useEffect } from 'react'
import { TodoContext } from '../context/todo';

import Call from '../async/call'

import Top from '../layout/top'
import Below from '../layout/below'
import { NewTodo, Profile, List } from '../components'

function Home() {
  const {setTodolist, present} = useContext(TodoContext)

  useEffect(()=>{
    async function Request(){
      await Call.get('/')
      .then(data=>setTodolist(data.data))
      .catch(err=>console.log(err))
    }
    Request()
  }, [present])

  return (
    <div className='flex flex-col'>
      <Top>
        <NewTodo w='w-96' />
        <Profile w='w-auto' prog={45}/>
      </Top>
    
      <Below>
        <List />
      </Below>
    </div>
  )
}

export default Home