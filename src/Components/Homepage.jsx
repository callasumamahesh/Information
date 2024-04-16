import React, { useState } from 'react'
import '../App.css'
import {useNavigate} from 'react-router-dom'

function Homepage({seta,a}) {
  // const [activebutton, setActiveButton] =useState(1)

  const navigation = useNavigate()
  return (
      <div className='Homepage'>
        <div className='buttons'>
          <div className='firststep'>
            <button className={a === 1 ? 'butactive' : 'but'}
            onClick={
              () => {
              seta(1) 
              navigation('/')
            }}
            >1</button>
            <div className='desktopview'>
              <p>STEP 1</p>
              <p>YOUR INFO</p>
            </div>
          </div>
          <div className='firststep'>
            <button className={a === 2 ? 'butactive' : 'but'}
            onClick={() => {seta(2)
            navigation('/secondstepverification')
            }}>2</button>
            <div className='desktopview'>
              <p>STEP 2</p>
              <p>SELECT PLAN</p>
            </div>
          </div>
          <div className='firststep'>
            <button className={a === 3 ? 'butactive' : 'but'}
            onClick={() => {seta(3)
            navigation('/thirdstepverification')
            }}>3</button>
            <div className='desktopview'>
              <p>STEP 3</p>
              <p>ADD-ONS</p>
            </div>
          </div>
          <div className='firststep'>
            <button className={a === 4 ? 'butactive' : 'but'}
            onClick={() =>  {seta(1); alert('Please Fill All Information')}
            }>4</button>
            <div className='desktopview'>
              <p>STEP 4</p>
              <p>SUMMARY</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Homepage