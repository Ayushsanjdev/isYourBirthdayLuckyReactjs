import React, { useState } from 'react'
import './App.css'
import Head from './components/head'
import Birthday from './components/birthday'
import Footer from './components/footer'
import { motion } from 'framer-motion'

function App() {
  const [dob, setDob] = useState([])
  const [sumOfDob, setSumOfDob] = useState(0)
  const [luckyNo, setLuckyNo] = useState([])
  const [result, setResult] = useState([])
  const [hideCard, setHideCard] = useState(false)

  return (
    <div className="App">
      <Head/>
      <motion.main
        className="card-component"
        animate={{ scale: 1.1 }}
        transition={{ duration: 0.8 }}>

        {hideCard === false ?
        <Birthday 
          dob={dob}
          setDob={setDob}
          luckyNo={luckyNo}
          setLuckyNo={setLuckyNo}
          sumOfDob={sumOfDob}
          setSumOfDob={setSumOfDob}
          result={result}
          setResult={setResult}
          setHideCard={setHideCard} />
        : ''}
        
      </motion.main>
      {hideCard === true ?
      <Footer/>
      : ''}
    </div>
  )
}

export default App
