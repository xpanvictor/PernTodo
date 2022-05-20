import React, {useState} from 'react'
import DateTimePicker from 'react-datetime-picker'

function NewTodo() {

  const [clock, setClock] = useState(false)

  const handleSubmit = (e) => {
      e.preventDefault()
      alert(e.target)
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <form className="card-body py-1 items-center bg-primary px-1" onSubmit={handleSubmit}>
        <h2 className="card-title mb-0 p-0">Add new todo
        <a className="btn btn-sm" onClick={()=>setClock((clock) ? false : true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        </a></h2>
        <div className="card-body m-0 py-0">
        <div className="flex py-0 flex-col md:flex-row">
            <div className="form-control">
            <label htmlFor="todo_name" className="label">Todo name</label>
            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" name='todo_name' />
            </div>
        </div>

        {clock && (<div >
            <DateTimePicker className="input p-0 input-bordered input-primary"/>
        </div>)}

        <div className="form-control">
        <label htmlFor="todo_name" className="label">Description</label>
        <textarea className="textarea textarea-primary" name='description' placeholder="Can add a detailed description"></textarea>
        </div>
        </div>
        <div className="align-center">
        <button type='submit' className="btn">Button</button>
        </div>
    </form>
    </div>
  )
}

export default NewTodo