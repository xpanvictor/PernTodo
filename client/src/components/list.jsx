import React, { useContext } from 'react'
import { TodoContext } from '../context/todo'

function List() {

  const {todolist} = useContext(TodoContext)

  const todos = todolist.map(e=><Todo e={e}/>)
  
  return (
    <div className="overflow-x-auto w-full">
    <table className="table w-full">
        <thead>
        <tr>
            <th>
            <label>
                <input type="checkbox" className="checkbox" />
            </label>
            </th>
            <th>Name</th>
            <th>Scale</th>
            <th>Description</th>
            <th>Due Date</th>
        </tr>
        </thead>
        <tbody>
            {todos}
        </tbody>
        <tfoot>
        <tr>
            <th></th>
            <th>Name</th>
            <th>Scale</th>
            <th>Description</th>
            <th>Due Date</th>
        </tr>
        </tfoot>
        
    </table>
    </div>
  )
}

function Todo({e}) {
    return(
        <tr>
            <th>                      
            <label>
                <input type="checkbox" className="checkbox" />
            </label>
            </th>
            <td>
            <div className="flex items-center space-x-3">
                <div>
                <div className="font-bold">{e.todo_name}</div>
                <div className="text-sm opacity-50">Important</div>
                </div>
            </div>
            </td>
            <td>
            {e.scale}
            {/* <span className="badge badge-ghost badge-sm"></span> */}
            </td>
            <td>{e.description}</td>
            <th>
            {e.due_date ? e.due_date : 'Not set'}
            </th>
        </tr>
    )
}

export default List