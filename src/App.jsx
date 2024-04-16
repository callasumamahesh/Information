import React, { useState } from 'react'
import Homepage from './Components/Homepage'
import './App.css'
import Stepone from './Components/Stepone'
import Steptwo from './Components/Steptwo'
import Stepthree from './Components/Stepthree'
import Stepfour from './Components/Stepfour'
import {Routes,Route} from 'react-router-dom'
import FifthStep from './Components/FifthStep'
function App() {
  const [a,seta] = useState(1)
  const [isyear,setIsYear] = useState(false)
  const [SelectedPlan,setSelectedPlan] = useState(null)
  const [selectedAdds,setSelectedAdds] = useState([])
  return (
    <div className='appjsx'>
      <div className='mainpage'>
        <Homepage seta = {seta} a={a}/>
      </div>
      <div className='stepone'>
        <Routes>
          <Route path="/" element={<Stepone seta = {seta} a={a}/>}></Route>
          <Route path="/secondstepverification" element={<Steptwo 
          setIsYear={setIsYear}
          seta = {seta}
          a={a}
          setSelectedPlan = {setSelectedPlan}
          SelectedPlan={SelectedPlan}/>}></Route>
          <Route path="/thirdstepverification" element={<Stepthree isyear={isyear} seta = {seta} a={a} setSelectedAdds= {setSelectedAdds}/>}></Route>
          <Route path="/fourthstepverification" element={<Stepfour isyear = {isyear} SelectedPlan= {SelectedPlan} seta = {seta} selectedAdds = {selectedAdds}/>}></Route>
          <Route path='/confirmation' element={<FifthStep />}></Route>
        </Routes>
      </div>
    </div>
    
  )
}

export default App