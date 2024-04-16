import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Stepthree({ isyear,seta,a,setSelectedAdds}) {
  const [isSelected1,setIsSelected1] = useState(false)
  const [isSelected2,setIsSelected2] = useState(false)
  const [isSelected3,setIsSelected3] = useState(false)

  const yearplan = isyear;
  const navigation = useNavigate()

  const handleCheckBox = (service,price) => {
    const selectedAddon = {service, price}
    setSelectedAdds((prevSelectedAdds) => 
    ([...prevSelectedAdds,
    selectedAddon]))
  }

  return (
    <div className='thrirdstep'>
        <h1 className='head'>Pick add-ons</h1>
        <p className="subhead text">Add-ons help enhance your gaming experience.</p>
        <div className='alladds'>
          <div className='add' id={isSelected1 ? 'add1' : ''} >
            <input type="checkbox" id="checkbox1" onClick={() => { setIsSelected1(!isSelected1) ;handleCheckBox('Online service',yearplan ? '+$10/yr':'+$1/mo')}}/>
            <label htmlFor="checkbox1">
              <div>
                <p className="head">Online service</p>
                <p className="subhead">Access to multiplayer games</p>
              </div>
            </label>
            {
              yearplan ? 
              <p>+$10/yr</p> : 
              <p>+$1/mo</p>
            }
          </div>
          <div className='add' id={isSelected2 ? 'add2' : ''}>
            <input type="checkbox" id="checkbox2" onClick={() => {setIsSelected2(!isSelected2);handleCheckBox('Large storage',yearplan ? '+$20/yr':'+$2/mo')}}/>
            <label htmlFor="checkbox2" >
              <div>
                <p className="head">Large storage</p>
                <p className="subhead">Extra 17B of cloud save</p>
              </div>
            </label>
            {
              yearplan ? 
              <p className='side'>+$20/yr</p> : 
              <p className='side'>+$2/mo</p>
            }
          </div>
          <div className='add' id={isSelected3 ? 'add3' : ''}>
              <input type="checkbox" id="checkbox3" onClick={() => {setIsSelected3(!isSelected3);handleCheckBox('Customizable profile',yearplan ? '+$20/yr':'+$2/mo')}}/>
            <label htmlFor="checkbox3" >
              <div>
                <p className="head">Customizable profile</p>
                <p className="subhead">Custom theme on your profile</p>
              </div>
            </label>
            {
              yearplan ? 
              <p>+$20/yr</p> : 
              <p>+$2/mo</p>
            }
          </div>
        </div>
        <div className='footer'>
          <p className='subhead getback' onClick={() => {
            seta(2)
            navigation('/secondstepverification')
          }}>Go Back</p>
          <button className="primaryButton" onClick={() => {
            seta(4)
            navigation('/fourthstepverification')
          }}>Next Step</button>
        </div>
    </div>
  )
}

export default Stepthree