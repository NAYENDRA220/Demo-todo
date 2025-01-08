import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { TodoContext } from '../context/TodoContext'
import { useNavigate } from 'react-router'
import { Post, postCreateTodo } from '../service/todo'

function Create() {
     //const { todos, setTodo } = useContext(TodoContext)
      
    const [todoname,setTodoName]=useState<string>()
    const[descryption,setDescryption]=useState<string>()
    //const[photo,setPhoto]=useState<string>();
    const navigate=useNavigate()
    
    const addtodo =async () =>{
      if (!todoname|| !descryption )
      {
        alert("enter todo")
        return
      }
      //setTodo([...todos, {title:todoname,descryption,photo}])
      const [error]= await postCreateTodo({title:todoname,body:descryption})
       if (!error) navigate('/');
    }
  return (
    <div>
      <div className ="bg-rose-300 w-96 h-[550px] ml-[650px] mt-[120px] rounded-lg relative ">
      
             <div className= "absolute left-[118px] top-[25px] font-bold text-gray-800 ">
                  <h1 className="text-2xl ">Add Travel packages</h1>
              </div>
             <form className= "absolute left-[35px] top-[95px]">
                    <label className='block mb-1'>
                      Todo Name
                    </label>
                   <input  value ={todoname} onChange= {(e)=>{setTodoName(e.target.value)}} className ="border-double border-4 border-gray50 w-[200px]" />
                   <label className='block mb-1'>
                      Todo description
                    </label>
                   <textarea  value ={descryption} onChange= {(e)=>{setDescryption(e.target.value)}} className ="border-double border-4 border-gray50 w-[200px]" />
                   <label className='block mb-1'>
                     Photo
                    </label>
                   
        
                     <button type="button" onClick={addtodo} className ="ml-[40px] bg-slate-400 text-white hover:bg-slate-500 rounded-full w-[60px] h-[30px] ">add</button>  
                   
                   
                  </form>
           
           </div>
    </div>
  )
}

export default Create
