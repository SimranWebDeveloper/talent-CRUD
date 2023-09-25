import React from 'react'
import AppRouter from '../src/router/AppRouter'
import { ContextProvider } from './context/GlobalContext'


const App = () => {
  return (
    <>
      <ContextProvider>
        <AppRouter/>
        
      </ContextProvider>
     
    </>
    
  )
}

export default App