import React, {useState} from 'react';
import styles from "./taskList.module.scss";
import { MdDeleteSweep } from 'react-icons/md'

const TaskList = () => {
    const[isClicked,setClicked] =useState(false);
  return (
    <section className={styles["task-list"]} >

        <div className={ isClicked?styles["taskDone"]: styles["task"]}  onClick={()=>setClicked(!isClicked)}  >
            {isClicked&&<div className={styles.bar}></div>}
            <h3 className={styles["task-name"]}>
            Study React
            </h3>
            <p className={styles["task-date"]}>
                Dec 2021 at 9:00pm
            </p>
        </div>
      
     < MdDeleteSweep className= {styles.icon} />

    </section>
  )
}

export default TaskList