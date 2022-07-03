import React,{useState} from 'react'
import styles from "./newList.module.scss";
import { MdDeleteSweep } from 'react-icons/md'
const Newlist = ( {task,date,time,id}) => {
    const[isClicked,setClicked] =useState(false);
  return (
    <>
        <section className={styles["task-list"]}>
      
      <div className={ isClicked?styles["taskDone"]: styles["task"]}  onClick={()=>setClicked(!isClicked)}  >
          {isClicked&&<div className={styles.bar}></div>}
          <h3 className={styles["task-name"]}>
        {task}
          </h3>
          <p className={styles["task-date"]}>
             Due Date: {date}
          </p>
          <p className={styles["task-date"]}>
             <strong>Initialized time :</strong>  {time}
          </p>
      </div>

   < MdDeleteSweep className= {styles.icon} />
  </section>
    </>
  )
}

export default Newlist