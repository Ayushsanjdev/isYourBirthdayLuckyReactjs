import React, { useState } from 'react'
import './App.css'
import Head from './components/head.tsx';
import Birthday from './components/birthday.tsx';
import Footer from './components/footer.tsx';

function App() {
  const [DOB, setDOB] = useState([])

  return (
    <div className="App">
      <Head />
      <Birthday/>
      <Footer/>
    </div>
  )
}

export default App
