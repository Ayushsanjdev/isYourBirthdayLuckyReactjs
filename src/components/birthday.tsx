import React, { useState } from 'react'

function Birthday() {

  const birthdayHandler = (e) => {
    console.log(e.target.value);
  }

  return (
    <div>
      <input 
        type="date" 
        onChange={birthdayHandler} />
    </div>
  )
}

export default Birthday