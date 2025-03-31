import React from "react"
import classes from './Button.module.css'

const Button = ({ children, ...props }) => {
  return (
    <button 
      {...props} 
      className={`${classes.button} ${classes[props.buttontype]}`}
    >
      {children}
    </button>
  )
};

export default Button;
