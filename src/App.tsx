

import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router'
import { Link } from 'react-router'
//import About from './pages/About';
//import HomePage from './pages/HomePage ';
//import Create from './pages/create';
//import Edit from './pages/edit';

import { useLocation } from "react-router";
import { Todo,TodoContext } from './context/TodoContext';
import { lazy, Suspense, useState } from 'react';
const About = lazy(()=>import("./pages/About"))
const HomePage = lazy(()=>import('./pages/HomePage '))
const Create = lazy(()=>import('./pages/create'))
const Edit = lazy(()=>import('./pages/edit'))
function App() {
  const storageTodos =localStorage.getItem("my todos")
  const[todos,setTodo]=useState<Todo[]>(storageTodos ? JSON.parse(storageTodos):[]);
  const changeTodoValue=(todos :Todo[]) =>{
    localStorage.setItem("my todos",  JSON.stringify(todos))
    setTodo(todos)
  }

  return (
   <>
   <TodoContext.Provider value={{todos,setTodo:changeTodoValue}}>
      <BrowserRouter>
        <Header/>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/about' element ={<About />} />
            <Route path='/EditTodo/:index' element ={<Edit/>} />
            <Route path='/createTodo' element = {<Create/>} />
            
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TodoContext.Provider>
   </> 
  )
}
const Header =()=>{
  const location =useLocation()
  return(
    <>
     <header className='bg-slate-800'>
      <nav className="relative right-30 top-5 bg-slate-800 pb-8 ">
      <Link to="/" className = {` p-20  text-gray-50 hover:text-rose-300 w-[15px] ${location.pathname === "/"? "text-primary" : ""}`}> Home page</Link>
      <Link to="/about"  className={`text-gray-50 hover:text-rose-300 ${location.pathname === "/about/1" ? "text-primary" : ""}`}> About page</Link>
      <Link to="/createTodo"  className={`p-20 text-gray-50 hover:text-rose-300 ${location.pathname === "/about/1" ? "text-primary" : ""}`}> create</Link>
      <Link to="/EditTodo/:index"  className={`p-20 text-gray-50 hover:text-rose-300 ${location.pathname === "/about/1" ? "text-primary" : ""}`}> edit</Link>
      </nav>
     </header>
  
      </>

  )
   
   
  }



export default App
// HOME PAGE MA LIST LIST XAINA BHANE TODO EMPTY CREATE IF CLICK GARYO BHANE / CREATE MA JANU PARYO      EDIT PAGE ADD MA JASTO FORM TESTAI
//CREATE TO

