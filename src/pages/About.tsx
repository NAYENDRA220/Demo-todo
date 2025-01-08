import React from 'react'
import { Link } from 'react-router'

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <button>Gioback</button>
      <Link to="/">Go to About page</Link>
    </div>
  )
}

export default About
