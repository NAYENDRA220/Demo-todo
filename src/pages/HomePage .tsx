import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { Edit,  Trash } from 'iconsax-react';
import { TodoContext } from '../context/TodoContext';
import { fetchListTodo, Post } from '../service/todo';


function HomePage() {
  //const { todos, setTodo } = useContext(TodoContext)
  const [todos, setTodo] = useState<Post[]>([])
  const navigation = useNavigate();




  const deletetodo = (x: number) => {
    const newtodo = todos.filter((_, idx) => idx !== x)
    setTodo(newtodo)
  }
 useEffect(() => {
  const init =async () => {
       const [error,response] = await fetchListTodo()
    if(!error){
      setTodo(response ?? [])  
     }
  }
  init()
 },[])

  //todo.length ===0 ? <p> there is no more to do </p>:<></>}

  return (
   <>
     <div className="mx-auto border shadow max-w-[1000px] p-4 rounded md mt-5">
        <h1 className='text-center ny-5 font-bold text-2xl'>lists</h1>
          <div className='flex justify-end'>
            <button className='bg-blue-900 rounded-md px-3 py-1 text-white' onClick={() =>{navigation("/createTodo")}}> Create</button>
          </div>
          <ul className="mt-5 " >
            {todos.map((todo, index) => (
              <li key={todo.id} className='py-1 flex ' > 
              {/*<img className='w-16 h-auto mr-4' src={todo.photo}/> */}
              <div className='flex-1'>
                <p>{index +1}</p>
                <p className='text -lg'>{todo.title}</p>
                <p className='text-sm text-gray-600'>{todo.body}</p>
              </div>
              <Trash onClick={() => { deletetodo(index) }} className=' ml-[50px] fill-white '> </Trash> <Edit onClick={() => { navigation(`/EditTodo/${index}`) }} className=' ml-[50px] fill-white '></Edit></li>))}
          </ul>
     </div>          
    
   </> 
  )
}

export default HomePage 
     
