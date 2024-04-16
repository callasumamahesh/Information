import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Steptwo({setIsYear,seta,a,setSelectedPlan,selectedPlan}) {
  const navigation = useNavigate()
  const [active, setActive] = useState(0)
  const [yearplan, setYearPlan] = useState(false)

  const choosenPlan = () => {
    setYearPlan(!yearplan)
  }

  useEffect(() => setIsYear(yearplan),[yearplan])
  return (
    <>
      <div className='SecondStep'>
        <h2>Select your plan</h2>
        <p className='subhead text'>You have the option of monthly or yearly billing.</p>
        <section className="allplans">

          <div className={active === 1 ? 'activeplan' : 'plan'} onClick={() => {setActive(1) ; setSelectedPlan(yearplan ? {name : 'Arcade' ,price : '+$90/year'} : {name : 'Arcade' ,price : '+$9/mo'})}} >
            <img src="../assests/icon-arcade.svg" alt="" />
            {
              yearplan ?
                <div className='plan1' onClick={() => console.log()}>
                  <p className='head'>Arcabe</p>
                  <p className='subhead'>$90/year</p>
                  <p className='head'>2 months free</p>
                </div> :
                <div className='plan1'>
                  <p className='head'>Arcabe</p>
                  <p className='subhead'>$9/mo</p>
                </div>
            }
          </div>
          <div className={active === 2 ? 'activeplan' : 'plan'} onClick={() => {setActive(2) ;setSelectedPlan(yearplan ? {name : 'Advanced' ,price : '+$120/year'} : {name : 'Advanced' ,price : '+$12/mo'})} }>
            <img src="../assests/icon-advanced.svg" alt="" />
            {
              yearplan ?
                <div className='plan1'>
                  <p className='head'>Advanced</p>
                  <p className='subhead'>$120/year</p>
                  <p className='head'>2 months free</p>
                </div> :
                <div className='plan1'>
                  <p className='head'>Advanced</p>
                  <p className='subhead'>$12/mo</p>
                </div>
            }
          </div>
          <div className={active === 3 ? 'activeplan' : 'plan'} onClick={() => { setActive(3) ;setSelectedPlan(yearplan ? {name : 'Pro' ,price : '+$150/year'} : {name : 'Pro' ,price : '+$15/mo'})}}>
            <img src="../assests/icon-pro.svg" alt="" />
            {
              yearplan ?
                <div className='plan1'>
                  <p className='head'>Pro</p>
                  <p className='subhead'>$150/year</p>
                  <p className='head'>2 months free</p>
                </div> :
                <div className='plan1'>
                  <p className='head'>Pro</p>
                  <p className='subhead'>$15/mo</p>
                </div>
            }
          </div>
        </section>

        <div className='changeplan'>
          <p className='subhead'>Monthly</p>
          <div id='bar'>
            <input type="checkbox" id="slidebar" onClick={() => choosenPlan()} />
            <label htmlFor="slidebar" className='labelbar'></label>
          </div>
          <p className='subhead'>Yearly</p>
        </div>


        <div className='footer'>
          <p className='subhead getback' onClick={() => {seta(1) 
          navigation('/')
          }}>Go Back</p>
          <button className="primaryButton" onClick={() => {seta(3)
          if(active!=0){
            navigation('/thirdstepverification')
          }
          else{
            alert('Please Select A Plan')
          }
          }}>Next Step</button>
        </div>
      </div>
    </>
  )
}

export default Steptwo