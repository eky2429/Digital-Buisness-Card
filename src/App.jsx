import { useState } from 'react'
import './App.css'

import profilePic from './assets/profile-pic.png'

import phoneIcon from './assets/icons8-phone.svg'
import emailIcon from "./assets/icons8-email.svg"
import netIcon from "./assets/icons8-internet.svg"
import locationIcon from "./assets/location_icon.svg"

import linkedInIcon from "./assets/icons8-linkedin.svg"
import githubIcon from "./assets/icons8-github.svg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <img className = "profile-pic" src = {profilePic} />
        <h1>Ethan Ky</h1>
        <h3>Aspiring Software Engineer</h3>
        <h3>3rd year student at UIC studying Computer Science</h3>
      </nav>
      <ul>
        <li><a href = "tel:773-837-5914"><img className = "icon" src = {phoneIcon} alt = "Phone number"/>773-837-5914</a></li>
        <li><a href = "mailto:eky2429@gmail.com"><img className = "icon" src = {emailIcon} alt = "Email"/>Email</a></li>
        <li><a href = "https://ethan-ky-site.onrender.com/"><img className = "icon" src = {netIcon} alt = "Official Site"/>Website</a></li>
        <li><a href = "https://www.google.com/search?q=Illinois"><img className = "icon"src = {locationIcon} alt = "Location"/>Illinois</a></li>

        <li><a href = "https://www.linkedin.com/in/ethan-ky2429"><img className = "icon" src = {linkedInIcon} alt = "LinkedIn"/>LinkedIn</a></li>
        <li><a href = "https://github.com/eky2429"><img className = "icon" src = {githubIcon} alt = "GitHub"/> Github</a></li>
      </ul>

      <footer>
      <p>Icons by <a href = "icons8.com">Icons8</a>.</p>
      </footer>

    </>
  )
}

export default App
