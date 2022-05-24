import React,{ useState } from 'react'
import Card from './component/card'
import logo1 from '../logo1.png'
import logo2 from '../Apple-Logo.png'
import arrow from '../arrow.png'
function App() {
  return (
    <>
  <Card  date={"28/10/2020"} 
  logo={logo1}
  title ="Case Study" 
  company="Amazon Gift"
  pay ="Pay" 
  mode="Desktop-Mobile"
  arrow={arrow}/>

<Card  date={"28/10/2020"} 
  logo={logo1}
  title ="Case Study" 
  company="Amazon Gift"
  pay ="Pay" 
  mode="Desktop-Mobile"
  arrow={arrow}/>

<Card  date={"28/10/2020"} 
  logo={logo1}
  title ="Case Study" 
  company="Amazon Gift"
  pay ="Pay" 
  mode="Desktop-Mobile"
  arrow={arrow}/>

<Card  date={"17 Sep 2020"} 
  logo={logo2}
  title ="Case Study" 
  company="Apple Gift"
  pay ="Payment" 
  mode="MacOS-Mobile"
  arrow={arrow}/>
  </>
  )
}

export default App
