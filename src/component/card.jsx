import React from 'react'

import style from './card.module.css'

const Card = (props) => {
  return (
    <div className={props.company==="Amazon Gift"? style.outerdiv: style.apple}>
      <div className={style.innerdiv}>
      <div className={style.date}>
          <p>{props.date}</p>
          <img src={props.logo} alt="" className={props.company==="Amazon Gift"? style.logo1: style.logo2}/>
      </div>
      <div className={style.casediv}>
          <p>{props.title}</p>
      </div>
      <div className={style.pay}>
          <h1>{props.company}</h1>
          <h1 className={style.pay}>{props.pay}</h1>
      </div>
      <div className={style.mode}>
          <p>{props.mode}</p>
      </div>
      <div>
        <img src={props.arrow} alt="" className={style.arrow}/>
      </div>
      </div>
    </div>
  )
}

export default Card

