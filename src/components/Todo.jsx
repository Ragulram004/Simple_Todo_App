import React from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'

const Todo = ({task,deleteTodo,editTodo}) => {
  return (
    <div className='flex justify-between items-start bg-gray-800 text-white py-3 px-4 rounded-md mb-1 cursor-pointer'>
      <p className='font-primary m'>
        {task.task}
      </p>
      <div className='flex'>
        <AiFillEdit className='text-xl' onClick={() => editTodo (task.id) }/>
        <BsFillTrashFill className='text-xl ml-3' onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  )     
}

export default Todo
