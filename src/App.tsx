import React, { useState } from 'react'
import './App.css'
import Head from './components/head';
import Birthday from './components/birthday';
import Footer from './components/footer';

function App() {
  const [DOB, setDOB] = useState([])

  return (
    <div className="App">
      <Head/>
      <main className="card-component">
        <Birthday/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
