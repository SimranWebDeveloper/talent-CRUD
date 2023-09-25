import { createContext, useEffect, useState } from "react";

export const GlobalContext=createContext()

export const ContextProvider=({children})=>{
    const[myTodos,setMyTodos]=useState(localStorage.getItem('myTodos') ? JSON.parse(localStorage.getItem('myTodos')) : [] )
    const[work,setWork]=useState(false)
    const [current,setCurrrent]=useState([])
    useEffect(()=>{
       
        // console.log(current);
    },[current])

    useEffect(()=>{
       
        localStorage.setItem('myTodos',JSON.stringify(myTodos))
    },[myTodos])

    return <GlobalContext.Provider value={{myTodos,setMyTodos,work,setWork,current,setCurrrent}}>
        {children}
    </GlobalContext.Provider>
}