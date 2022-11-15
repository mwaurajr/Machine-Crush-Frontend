import React from 'react'
import "./HomePage.css"
function HomePage() {
  return (
    <div className="main-wrapper">
      <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/signup">Signup</a></li>
      <li><a href="/login">Login</a></li>
      </ul>

    </div>
  )
}

export default HomePage