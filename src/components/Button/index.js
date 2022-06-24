import React from 'react'
import "./Button.scss";

const Button = ({text, classType}) => {
  return (
    <button className={`btn btn--${classType}`}>{text}</button>
  )
}

export default Button;