import React from 'react'
import styles from "./warning.module.scss"
const Warning = ({onValid}) => {
  return (
    <div className={styles.warning} onClick={()=>onValid()}  >
        <div className={styles["warning-container"]} >
          <h1 className={styles.header}>Invalid INPUT</h1>
          <p  className={styles.text}>Please fill in the blanks</p>
          <button className={styles.btn} onClick={()=>onValid()} >Okay</button>
        </div>
    </div>
  )
}

export default Warning