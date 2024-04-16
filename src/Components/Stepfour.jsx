import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Stepfour({ seta, SelectedPlan, selectedAdds,isyear }) {
  
  const navigation = useNavigate()
  let totalmoney = 0;
  let all = []
  let number = SelectedPlan.price.match(/\d+/)[0]
  all.push(number)
  selectedAdds.map((item,i) => {
    let a1 = item.price.match(/\d+/)[0]
    all.push(a1)
  })
  totalmoney = all.reduce((a,b) => a+ Number(b), 0)
  return (
    <>
    {
      SelectedPlan ? 
    <div className='fourthDiv'>
      <h1 className='head'>Finishing Up</h1>
      <p className='subhead'>Double-check everything looks OK before confirming.</p>
      <div className='SelectdPlan'>
        {console.log(selectedAdds)}
        <div className='choose'>
          <div className='head top'>
            <p>{SelectedPlan.name}</p>
            <p className='subhead' onClick={() => navigation('/secondstepverification')}>Change</p>
          </div>
            <div>
              <p>{SelectedPlan.price}</p>
            </div>
        </div>
          <div className='mapDiv'>
            {
              selectedAdds.map((item,i) => {
                return(
                  <div className='lastadd' key={i}>
                        <p className='subhead'>{item.service}</p>
                        <p className='head'>{item.price}</p>
                  </div>
                )
              })
            }
          </div>
          <div className='money'>
            <p className='subhead totalmoney'>Total {isyear ? 'per/year' : 'per/month'}</p>
            <p className='totalp'>${totalmoney} {isyear ? '/yr' : '/mo'}</p>
          </div>
      </div>
      <div className='footer'>
        <p className='subhead getback' onClick={() => {
          seta(2)
          navigation('/thirdstepverification')
        }}>Go Back</p>
        <button className="primaryButton" onClick={() => {
          seta(4)
          navigation('/confirmation')
        }}>Confirm</button>
      </div>
    </div>
     : <div className='head fill'>For Visible of this page You has to Fill the form.</div> }
    </>
  )
}

export default Stepfour