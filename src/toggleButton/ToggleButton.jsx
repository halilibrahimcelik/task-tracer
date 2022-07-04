import React from 'react'
import styles from "./toggleButton.module.scss";
const ToggleButton = ({onToggle,isShow}) => {
    

  return (
    <>
    <button className={isShow?styles.btn:styles.btnDanger} onClick={()=>onToggle()}>{isShow?"Show the Task Form":"Hide the Task Form"}  </button>
    </>
  )
}

export default ToggleButton