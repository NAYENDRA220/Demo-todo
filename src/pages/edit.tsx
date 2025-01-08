import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { TodoContext } from '../context/TodoContext'
import { Navigate, useNavigate, useParams } from 'react-router'
import { getTodoByTd, updateTodo } from '../service/todo'
function Edit() {
    //const { todos, setTodo } = useContext(TodoContext)
     const [todoname,setTodoName]=useState<string>()
     const[descryption,setDescryption]=useState<string>();
     //const[photo,setPhoto]=useState<string>();
     const{index}=useParams() 
     const navigate=useNavigate()
     useEffect(() =>{
      if(!index) return
      //const newValues =todos[parseInt(index)]
      //setTodoName(newValues.title)
      //setDescryption(newValues.descryption)
      //setPhoto(newValues.photo)
      const init= async()=>{
        const[_,data] = await getTodoByTd(index)
        if(data){
          setTodoName(data.title)
          setDescryption(data.body)
        }
      }
      init()
     },[index])
     const edittodo = async() =>{
      if (!todoname||!descryption|| !index){
        alert("enter new values");
        return;
      }
      
      //setTodo(todos.map((todo,idx) => parseInt(index) === idx ? {title:todoname,descryption,photo}: todo));
      const[error]=await updateTodo(index,{title:todoname ,body:descryption})
       if(!error) navigate('/');
     };

  return (
    <div>
      <div className ="bg-rose-300 w-96 h-[550px] ml-[650px] mt-[120px] rounded-lg relative ">
      
             <div className= "absolute left-[118px] top-[25px] font-bold text-gray-800 ">
                  <h1 className="text-2xl ">Edit packages</h1>
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
                   {/* * <input type='file' onChange={(e) =>{
                    if (!e.target.files?.[0]) return
                       setPhoto(URL.createObjectURL(e.target.files[0]));}} className ="border-double border-4 border-gray50 w-[200px]" /> } */}
                     <button type="button" onClick={edittodo} className ="ml-[40px] bg-slate-400 text-white hover:bg-slate-500 rounded-full w-[60px] h-[30px] ">add</button>  
                   
                   
                  </form>
           
           </div>
    </div>
    
  )
}
export default Edit

