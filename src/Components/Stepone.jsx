import React from 'react'
import { useNavigate } from 'react-router-dom'

function Stepone({seta,a}) {
  const navigation = useNavigate()
  return (
    <div className='firstDiv'>
        <h1>Personal Info</h1>
        <p className='subhead'>Please provide your name,email address, and phone number.</p>
        <form action="">
          <div>
              <label htmlFor="">Name </label><br />
              <input type="text" name="" id="" placeholder='Enter Your name'/>
          </div>
          <div>
            <label htmlFor="">Email</label><br />
            <input type="text" placeholder='e.g.stephenking@lorem.com'/>
          </div>
          <div>
            <label htmlFor="">Phone Number</label><br />
            <input type="text" placeholder='e.g. +1 234 567 890'/>
          </div>
        </form>
        <button className='primaryButton'onClick={() => {
          seta(2)
          navigation('/secondstepverification')}}>Next Step</button>
    </div>
  )
}

export default Stepone