import React, { useContext, useEffect, useState } from 'react'
import {CiEdit,CiCircleRemove} from 'react-icons/ci'
import {GiCancel} from 'react-icons/gi'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'


//coming ALl my Todos
const Todos = () => {
      // Global Context
      // List or inputs see
      const{myTodos,setMyTodos,work,setWork,current,setCurrrent}=useContext(GlobalContext)


    let filteredData=[]
    console.log(filteredData.length);
    const deleteTodo = (id) => {
      if (confirm('Silmek isdediyinize eminsiz')) {
        
        // Save it!
        
           filteredData= myTodos.filter((item)=>item.id!=id)
          setMyTodos(filteredData)
          
          window.location.reload()    
           
      } 
     
        
    }
    
    
    const updateTodo = (id) => {
      console.log(id);
      let curentValue=myTodos.find((item)=>item.id===id)


      setCurrrent([curentValue])

      setWork(true)


    }



  return (
    <>
        <ol className='h-96 overflow-y-auto' >
    
      {
       
       (filteredData.length==0 ? myTodos:filteredData ).map((todo,index) => {
     
            return <li className=' text-sm' > 
             {/*   outline-none py-1 px-4 mb-2 */}
              <div key={index} className='flex justify-center  border border-gray-300 rounded-full  h-20 divide-x   mb-2 text-black w-full'>
                <div className='basis-2/5 px-2 flex items-center'>
                  <span>{index+1}.</span>
                  {/* qss */}
                  <input type="text" defaultValue={todo.qss} disabled   className=' my-1 w-full  rounded-3xl bg-white'  id={index}             
                   onChange={(e)=>{
                    setNewTodo(e.target.value)
                    setOldTodo(todo)
                }} 
                /> 
                {/* product */}
                <input type="text" className='w-full  bg-white' disabled defaultValue={todo.product} />

                </div>
                <div className='basis-2/5 px-2 '>

                 {/* baslama */}
                  <input type="text" className='w-full  bg-white' defaultValue={todo.baslama} disabled />
                  {/* ayrilma */}
                <input type="text" className='w-full  bg-white' defaultValue={!todo.currently_study?todo.ayrilma:'currently working'} disabled />
                </div>
                <div className='basis-1/5 px-2 flex items-center'>
                {/* Update */}
                <NavLink className='btn' to={'/'}>
                  <CiEdit className='text-2xl ms-2 opacity-60 hover:opacity-100 duration-300' onClick={()=>updateTodo(todo.id)}/> 
                </NavLink>
                  {/* Delete */}
              <button className='btn ' onClick={()=>deleteTodo(todo.id)}><GiCancel className='text-xl text-red-600 hover:text-red-800 duration-300 ml-2'/></button> 
                


                 
                </div>

              </div>
              </li>

      
        })
      }
    </ol>
    </>
  )
}

export default Todos