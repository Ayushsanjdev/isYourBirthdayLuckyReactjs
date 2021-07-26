import React from 'react'
import { motion } from 'framer-motion'

function Birthday({ setHideCard, dob, setDob, luckyNo, setLuckyNo, sumOfDob, setSumOfDob, result, setResult }: any) {

  const birthdayHandler = (e: any) => {
    let dateValue = e.target.value
    for (let i = 0; i < dateValue.length; i += 1) {
      setDob(dob.push(dateValue.charAt(i)))
    }

    for (let i = 0; i < dob.length; i++) {
      if (dob[i] !== "-") {
        sumOfDob = sumOfDob + Number(dob[i])
        setSumOfDob(sumOfDob)
      }
    }
  }

  const luckyNoHandler = (e: any) => {
    let luckyValue = e.target.value
    setLuckyNo(luckyNo.push(Number(luckyValue)))
    setResult(result.push(Number(sumOfDob / luckyNo[0])))
  }

  const showLuck = () => {
    setHideCard(true)
  }

  return (
    <div>
      <div className="birthday-card">
        <label>
          Select DOB : {' '}
          <input
            type="date"
            onChange={birthdayHandler} />
        </label>
        <label>
          Lucky no : {' '}
          <input
            type="number"
            onChange={luckyNoHandler}
            style={{ width: '100px' }} />
        </label>
        <motion.button
          className="submit-button"
          whileHover={{ scale: 1.1 }}
          onClick={showLuck}>
          Let's Find Out
        </motion.button>
      </div>
    </div>
  )
}

export default Birthday