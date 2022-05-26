import React, {useContext, useState} from 'react'
import DateTimePicker from 'react-datetime-picker'
import Call from '../async/call'
import { TodoContext } from '../context/todo'

import Card from './card'

function NewTodo(props) {

  const {setPresent} = useContext(TodoContext)

  const [clock, setClock] = useState(false)

  const [body, setBody] = useState({})

  const handleSubmit = (e) => {
      e.preventDefault()
      async function Send(){
        await Call.post('/', body)
        .then((data)=>setPresent(true))
        .catch(err=>alert(err.response.data))
      }
      Send()
  }

  return (
    <Card w={props.w}>
    <form className="card-body py-1 items-center bg-primary px-1" onSubmit={handleSubmit}>
        <h2 className="card-title mb-0 p-0">Add new todo
        <a className="btn btn-sm" onClick={()=>setClock((clock) ? false : true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        </a></h2>
        <div className="card-body m-0 py-0">
        <div className="flex py-0 flex-col md:flex-row">
            <div className="form-control">
            <label htmlFor="todo_name" className="label">Todo name</label>
            <input type="text" onChange={(e)=>setBody(Object.assign(body, {todo_name:e.target.value}))} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" name='todo_name' />
            </div>
        </div>

        {clock && (<div >
            <DateTimePicker onChange={(e)=>setBody(Object.assign(body, {due_date: e}))} className="input p-0 input-bordered input-primary"/>
        </div>)}

        <div className="form-control">
        <label htmlFor="todo_name" className="label">Description</label>
        <textarea onChange={(e)=>setBody(Object.assign(body, {description:e.target.value}))} className="textarea textarea-primary" name='description' placeholder="Can add a detailed description"></textarea>
        </div>
        </div>
        <div className="align-center">
        <button type='submit' className="btn">Submit</button>
        </div>
    </form>
    </Card>
  )
}

export default NewTodo