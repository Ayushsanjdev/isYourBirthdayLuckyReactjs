import React, { useState } from 'react'

function Birthday() {

  const birthdayHandler = (e : any) => {
    console.log(e.target.value)
  }

  return (
    <div className="birthday-card">
      <label> 
        Select DOB : {' '}
        <input 
          type="date" 
          onChange={birthdayHandler}/>
      </label>      
      <label> 
        Lucky no : {' '}
        <input 
          type="number"
          style={{width: '100px'}} />
      </label>      
      <button className="submit-button">Let's Find Out</button>
    </div>
  )
}

export default Birthday