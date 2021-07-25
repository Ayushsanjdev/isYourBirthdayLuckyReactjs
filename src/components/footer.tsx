import React, { useState } from 'react'

function Footer() {

  return (
    <div className="footer-component">
      <h5>Let's connect</h5>
      <section>
        <a href="https://ayush-sanj-portfolio.vercel.app" target="_blank">
          <img src="https://img.icons8.com/ios/50/000000/resume-website.png"/>  
        </a>
        <a href="https://github.com/ayushsanjdev" target="_blank">
          <img src="https://img.icons8.com/fluent-systems-filled/48/000000/github.png"/> 
        </a>
        <a href="https://www.linkedin.com/in/ayush-s-065714101/" target="_blank">
          <img src="https://img.icons8.com/color/48/000000/linkedin.png"/>  
        </a>
        <a href="https://twitter.com/ayushsanj" target="_blank">
          <img src="https://img.icons8.com/material-rounded/48/000000/twitter.png"/> 
        </a>
      </section>
      
    </div>
  )
}

export default Footer