import React, { useContext, useEffect, useState } from 'react'
import logo from '../assets/img/logo.png'
import Todos from './Todos'
import { v4 as uuidv4 } from 'uuid';
import { useParams,NavLink, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import {BiSolidDownArrow,BiSolidUpArrow} from 'react-icons/bi'
import List from './List';


const Stages = () => {
    // Global Context
    // All my Todos   And  Work experince
    const{myTodos,setMyTodos,work,setWork,current,setCurrrent}=useContext(GlobalContext)
    const [dropdown,setDropdown]=useState(false)
    const [dropdown2,setDropdown2]=useState(false)



    // ----------------------------------
    
    // At the moment study
    const[study,setStudy]=useState(true)



    
    const[todo,setTodo]=useState(
        {
            id:uuidv4(),
            qss: "",
            product: "",
            emek:"",
            pesekarliq: "",
            baslama: "",
            ayrilma: "",
            currently_study:false,
    
        }

    )
        const handleChange = (e) => {
        // console.log(e.target.value);
    
        setTodo({...todo,[e.target.name]:e.target.value})

        // console.log(todo);
        
    }
 
    const location=useNavigate()

    function submitForm(e) {
        e.preventDefault()

        let isUpdate = false;
        console.log(current);
        let todos = myTodos.map((el)=>{
            
        if (el.id==todo.id) {
            isUpdate=true;
            return todo;
        }
        return el
        })
    
        //   setMyTodos(todos)
        setCurrrent([])
        {todo==='' ?   <h2>Please write something</h2 >: isUpdate?setMyTodos(todos) : setMyTodos([...myTodos,todo])}
        location('/list')
        
    }


    useEffect(()=>{
        console.log(current)
        if(current.length !==0) {
            setTodo(current[0])
            setCurrrent([])
        }
    },[])
    console.log(todo);


  return (
    <div className='stages-section py-16'>
        <div className='container '>
            <div className='flex flex-row'>
                <div className='basis-2/5'><img src={logo} alt=""  /></div>
                <div className='basis-3/5 mt-10 '>
                    <div className='relative w-3/4'>
                        <ul className=''>
                            <li className='bg-gray-100 ml-16   rounded-3xl mb-2 px-8 py-3'>Təhsil</li>
                            <li className='bg-gray-100 ml-16  rounded-3xl mb-2 px-8 py-3'>Dil Bilikləri</li>
                            <li className='bg-gray-100 ml-16   rounded-3xl mb-2 px-8 py-3'>Xüsusi Bacarıqlar</li>
                            <li className='bg-gray-100 ml-16   rounded-3xl mb-2 px-8 py-3'>İdman</li>
                            <li className='bg-blueB text-white font-semibold rounded-3xl mb-2 pl-8 py-3'><span className='mr-12'>5.</span>İş təcrübəsi</li>
                            <li className='bg-gray-100 ml-16 rounded-3xl mb-2 px-8 py-3'>Proqram Bilikləri</li>
                        </ul>
                        <div className='h-h128 absolute top-0 left-40 border bg-white w-full  rounded-2xl  text-blueL text-xl p-6'>
                          
                            <p className=''>İş təcrübəsi</p>
                            <div className='w-full text-lg bg-blueL text-center  text-white rounded-xl my-4'>1</div>
                            {/* ----------Beli--------------- ---------------------Xeyr------------ */}
                            
                            <div className='h-96 overflow-y-scroll '>
                            <label htmlFor="" className='text-gray-600 text-lg leading-10 '>İş təcrübəniz var?</label>
                                    <div className='flex  w-full whitespace-nowrap space-x-4'>
                                        <label htmlFor="yes" className='bg-stone-100 text-gray-600 text-sm  w-1/4 rounded-3xl py-1 px-4 text-end border-2 border-gray-300'>
                                            Bəli
                                            <input type="radio" className='ms-8' name='sit' id='yes' onClick={()=>setWork(true)}/>
                                        </label>
                                        <label htmlFor="no" className='bg-stone-100 text-gray-600 text-sm  w-1/4 rounded-3xl py-1 px-4 text-end border-2 border-gray-300'>
                                            Xeyr
                                            <input type="radio" className='ms-8' name='sit' id='no'  onClick={()=>setWork(false)}/>
                                        </label>
                                    </div>
                                

                                {/*  Employer works */}
                                {work? 
                                    <form onSubmit={submitForm} className='text-gray-600 text-lg py-5 '>
                      
                                        {/* 1-----QSS */}
                                        <label htmlFor='ofis' className='mb-2'>Çalışdığınız müəssisənin adını qeyd edin.*</label>

                                        <input type="text" placeholder='QSS Analitcs' id='ofis' required className=' w-full bg-stone-100 text-gray-600 text-sm font-semibold border-2 border-gray-300 rounded-3xl outline-none py-1 px-4 mb-2'
                                        onChange={handleChange} value={todo.qss} name='qss'
                                        />
                                        {/* 2-----Product */}
                                       
                                        <label htmlFor='job' className='mb-2'>Vəzifənizi qeyd edin.*</label>
                                        <input type="text" placeholder='Product Manager'  id='job' required className='w-full bg-stone-100 text-gray-600 text-sm font-semibold border-2 border-gray-300 rounded-3xl outline-none py-1 px-4 mb-2'
                                        onChange={handleChange} value={todo.product}  name='product'/>
                                        
                                        <div className='flex  space-x-2 '>
                                            {/* 2------ Emek */}
                                            <div className='basis-1/2 '>
                                            <label htmlFor='ofis'  className='mb-2'>Əmək fəaliyyəti forması:</label>
                                            
                                            <div className="dropdown relative w-60  ">
                                                <div onClick={()=>setDropdown(!dropdown)} className='absolute top-0 w-full bg-stone-100 text-gray-600 text-sm rounded-3xl border-2 border-gray-300 py-1 px-4  flex justify-between'>
                                                    <input  value={todo.emek ? todo.emek :'Seçin..'}  class="    " type="button" />
                                                    <span  className='text-blueL text-exsm  pt-2'>{dropdown?<BiSolidUpArrow/>:<BiSolidDownArrow/>}</span>

                                                 </div>   
                                                
                                                <ul  className={`absolute top-9 left-3 w-full  px-2 bg-slate-200 ${dropdown?'visible':'invisible '} `} >
                                                    <label className={`group flex justify-between cursor-pointer   group p-1  hover:text-blueL hover:font-semibold hover:bg-blueM`} htmlFor="Fiziki əmək"  onClick={(e)=>{setTodo({...todo,emek:'Fiziki əmək'});setDropdown(false);}}>
                                                      <label htmlFor="Fiziki əmək"  className={` cursor-pointer  `}  >Fiziki əmək</label>
                                                        <input type="radio" id='Fiziki əmək' name='emek'  className={` w-3  cursor-pointer  invisible group-hover:visible`} />
                                                    </label>
                                                    <label className='flex justify-between group p-1 cursor-pointer   hover:text-blueL hover:font-semibold hover:bg-blueM' htmlFor="Sənət"  onClick={(e)=>{setTodo({...todo,emek:'Sənət'});setDropdown(false)}}>
                                                        <label htmlFor="Sənət" className=' cursor-pointer  hover:text-blueL ' >Sənət</label>
                                                        <input type="radio" id='Sənət' name='emek' className='w-3 invisible  cursor-pointer  group-hover:visible' />
                                                    </label>
                                                    <label className='flex justify-between group p-1 cursor-pointer   hover:text-blueL hover:font-semibold hover:bg-blueM' htmlFor="Ali ixtisas"  onClick={(e)=>{setTodo({...todo,emek:'Ali ixtisas'});setDropdown(false)}}>
                                                        <label htmlFor="Ali ixtisas" className=' cursor-pointer  hover:text-blueL ' >Ali ixtisas</label>
                                                        <input type="radio" id='Ali ixtisas' name='emek' className='w-3  cursor-pointer  invisible group-hover:visible' />
                                                    </label>
                                                    <label className='flex justify-between group p-1 hover:text-blueL hover:font-semibold hover:bg-blueM' htmlFor="Sahibkar" onClick={(e)=>{setTodo({...todo,emek:'Sahibkar'});setDropdown(false)}}>
                                                        <label htmlFor="Sahibkar" className=' cursor-pointer  hover:text-blueL '>Sahibkar</label>
                                                        <input type="radio" id='Sahibkar' name='emek' className='w-3  cursor-pointer  invisible group-hover:visible' />
                                                    </label>
               
                                                </ul>
                                            </div>
                                                
                                            

                                            </div>
                                            
                                            {/* 3------------ Peşəkarlıq */}
                                         <div className='basis-1/2 mb-12'>
                                            <label htmlFor='ofis'  className='mb-2'>Peşəkarlıq dərəcəsi:</label>
                                            
                                            <div className="dropdown2 relative w-60  ">
                                                <div onClick={()=>setDropdown2(!dropdown2)} className='absolute top-0 w-full bg-stone-100 text-gray-600 text-sm rounded-3xl border-2 border-gray-300 py-1 px-4  flex justify-between'>
                                                    <input  value={todo.pesekarliq ? todo.pesekarliq :'Seçin..'}  class="    " type="button"  />
                                                    <span  className='text-blueL text-exsm  pt-2'>{dropdown2?<BiSolidUpArrow/>:<BiSolidDownArrow/>}</span>

                                                 </div>   

                                                <ul  className={`absolute top-9 left-3 w-full  px-2 cursor-pointer bg-slate-200 ${dropdown2?'visible':'invisible '} `} >
                                                    <label className={`group flex justify-between group p-1 cursor-pointer  hover:text-blueL hover:font-semibold hover:bg-blueM`} htmlFor="Təcrübəçi"  onClick={(e)=>{setTodo({...todo,pesekarliq:'Təcrübəçi'});setDropdown2(false);}}>
                                                      <label htmlFor="Təcrübəçi"  className={`cursor-pointer`}  >Təcrübəçi</label>
                                                        <input type="radio" id='Təcrübəçi' name='tec'  className={` w-3 invisible cursor-pointer group-hover:visible`} />
                                                    </label>
                                                    <label className='flex justify-between group p-1 cursor-pointer hover:text-blueL hover:font-semibold hover:bg-blueM' htmlFor="Kiçik mütəxəssis"  onClick={(e)=>{setTodo({...todo,pesekarliq:'Kiçik mütəxəssis'});setDropdown2(false)}}>
                                                        <label htmlFor="Kiçik mütəxəssis" className='hover:text-blueL cursor-pointer ' >Kiçik mütəxəssis</label>
                                                        <input type="radio" id='Kiçik mütəxəssis' name='tec' className='w-3 cursor-pointer invisible group-hover:visible' />
                                                    </label>
                                                    <label className='flex justify-between group p-1 cursor-pointer hover:text-blueL hover:font-semibold hover:bg-blueM' htmlFor="Mütəxəssis"  onClick={(e)=>{setTodo({...todo,pesekarliq:'Mütəxəssis'});setDropdown2(false)}}>
                                                        <label htmlFor="Mütəxəssis" className='cursor-pointer hover:text-blueL ' >Mütəxəssis</label>
                                                        <input type="radio" id='Mütəxəssis' name='tec' className='w-3 invisible cursor-pointer group-hover:visible' />
                                                    </label>
                                                    <label className='flex justify-between group p-1 cursor-pointer hover:text-blueL hover:font-semibold hover:bg-blueM' htmlFor="Baş mütəxəssis" onClick={(e)=>{setTodo({...todo,pesekarliq:'Baş mütəxəssis'});setDropdown2(false)}}>
                                                        <label htmlFor="Baş mütəxəssis" className='cursor-pointer hover:text-blueL '>Baş mütəxəssis</label>
                                                        <input type="radio" id='Baş mütəxəssis' name='tec' className='w-3 invisible cursor-pointer group-hover:visible' />
                                                    </label>
               
                                                </ul>
                                            </div>
                                                
                                            

                                            </div>

                                        </div>
                                         
                                          <div className='flex   space-x-2'>
                                            {/* 4------ Baslama */}  
                                            <div className='basis-1/2' >
                                                <label htmlFor='ofis' className='mb-2'>İşə başlama tarixi:</label>
                                              
                                                <input type="date" required placeholder='QSS Analitcs' id='ofis' className='w-full bg-stone-100 text-gray-600 text-sm rounded-3xl border-2 border-gray-300 outline-none py-1 px-4 mb-2'
                                                onChange={handleChange} value={todo.baslama} name='baslama'/>
                                            </div>
                                            {/* 4------ Ayrilma */}   
                                            <div className='basis-1/2'>
                                                <label htmlFor='ofis' className='mb-2'>İşdən ayrılma tarixi:</label>
                                        <input type="date" placeholder='QSS Analitcs' id='ofis' required disabled={todo.currently_study}   className='w-full  bg-stone-100 text-gray-600 text-sm rounded-3xl border-2 border-gray-300 outline-none py-1 px-4 mb-2'
                                        onChange={handleChange} value={todo.currently_study?"":todo.ayrilma} name='ayrilma'/>
                                            </div>
                                        </div>
                                      
                                        <div className='text-end'>
                                            <label htmlFor="study" >Hal hazırda oxuyuram</label>
                                            <input type="checkbox" id='study' name='currently_study'  className='mx-2' checked={todo.currently_study} onChange={()=>setTodo({...todo,currently_study:!todo.currently_study})} />
                                          
          
                                        </div>
                                        <div className='text-center'>
                                            
                                            <button type='submit' className='bg-gray-400 hover:bg-gray-800 hover:duration-300 text-white font-bold rounded-3xl py-2 px-12 my-2'
                                            >Yadda Saxla ✓</button>
                                            

                                            <br />
                                            <NavLink  to='/list' className='bg-myblueOne hover:bg-myblueTwo hover:duration-300 text-white font-bold rounded-3xl py-2 px-6 my-2'>Siyahiya bax</NavLink>
                                        </div>

                                    </form>
                                     : ''}      
                            </div>
                            
                                                                                                
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* // Todo */}
            
        </div>
    </div>
  )
}

export default Stages