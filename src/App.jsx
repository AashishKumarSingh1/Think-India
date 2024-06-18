import { useEffect } from 'react'

import './App.css'
import Integration  from './components/Home/Integration'
import AOS from 'aos';

function App() {
   
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* <h1 className=' bg-slate-400'>Hello World</h1> */}
      <Integration />
      
    </>
  )
}

export default App
