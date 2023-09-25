import React, { useContext } from 'react'
import Stages from '../components/Stages'
import Todos from '../components/Todos'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'
import logo from '../assets/img/logo.png'


const List = () => {
          // Global Context
      // List or inputs see
      const{myTodos,setMyTodos,work,setWork}=useContext(GlobalContext)
  return (
    <div className='list-section py-16'>
        <div className='container'>
            <div className='flex'>
                <div className='basis-2/5 '><img src={logo} alt=""  /></div>
                <div className='basis-3/5 mt-10'>
                    <div className=' relative w-3/4'>
                                    <ul className=''>
                                        <li className='bg-gray-100 ml-16  rounded-3xl mb-2 px-8 py-3'>Təhsil</li>
                                        <li className='bg-gray-100 ml-16  rounded-3xl mb-2 px-8 py-3'>Dil Bilikləri</li>
                                        <li className='bg-gray-100 ml-16  rounded-3xl mb-2 px-8 py-3'>Xüsusi Bacarıqlar</li>
                                        <li className='bg-gray-100 ml-16  rounded-3xl mb-2 px-8 py-3'>İdman</li>
                                        <li className='bg-blueB text-white font-semibold rounded-3xl mb-2 px-8 py-3'><span className='mr-12'>5.</span>İş təcrübəsi</li>
                                        <li className='bg-gray-100 ml-16  rounded-3xl mb-2 px-8 py-3'>Proqram Bilikləri</li>
                                    </ul>
                                    <div className='h-h128 absolute top-0 left-40 border bg-white w-full  rounded-2xl  text-blueL text-xl p-6'>
                                        
                                        <p className=''>İş təcrübəsi</p>
                                        <div className='w-full text-lg bg-blueL text-center  text-white rounded-xl my-4'>1</div>
                                    
                                    {/* ----------------------------------------------------------- */}
                                        <div className='text-center'>
                                            <Todos myTodos={myTodos} setMyTodos={setMyTodos}/>
                                            <NavLink className='rounded-3xl bg-gray-200 px-6 py-2 'to='/'>Yeni iş yeri əlavə et +</NavLink>
                                        </div>
                                    </div>
                    </div>
                </div>
            </div>
        </div>

        

    </div>
  )
}

export default List