import { useState } from 'react'
import './App.css'

import profilePic from './assets/profile-pic.png'

import phoneIcon from './assets/icons8-phone.svg'
import emailIcon from "./assets/icons8-email.svg"
import netIcon from "./assets/icons8-internet.svg"
import locationIcon from "./assets/location_icon.svg"

import linkedInIcon from "./assets/icons8-linkedin.svg"
import githubIcon from "./assets/icons8-github.svg"

import {EMAIL_ADDRESS, PHONE_NUMBER} from "./PSData.jsx"

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
      <div className='buttons'>
        <a href = "tel:"><img className = "icon" src = {phoneIcon} alt = "Phone number"/>{PHONE_NUMBER}</a>
        <a href = {`mailto:${EMAIL_ADDRESS}`}><img className = "icon" src = {emailIcon} alt = "Email"/>Email</a>
        <a href = "https://ethan-ky-site.onrender.com/"><img className = "icon" src = {netIcon} alt = "Official Site"/>Website</a>
        <a href = "https://www.google.com/search?q=Illinois"><img className = "icon"src = {locationIcon} alt = "Location"/>Illinois</a>

        <a href = "https://www.linkedin.com/in/ethan-ky2429"><img className = "icon" src = {linkedInIcon} alt = "LinkedIn"/>LinkedIn</a>
        <a href = "https://github.com/eky2429"><img className = "icon" src = {githubIcon} alt = "GitHub"/> Github</a>
      </div>

      <footer>
      <p>Icons by <a href = "icons8.com">Icons8</a>.</p>
      </footer>

    </>
  )
}

export default App
