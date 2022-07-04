import React,{useState,useEffect} from 'react'
import styles from "./newList.module.scss";
import { MdDeleteSweep } from 'react-icons/md'
const Newlist = (props) => {
  const  {task,date,time,isDone ,isDoneHandler,id}=props;
    const[isClicked,setClicked] =useState(true);


    
    const clickHandler=(e)=>{
      
setClicked(!isClicked);

  const newArr=[{
    isDone:isClicked?true:false,
    id:id
  }]
 

   
isDoneHandler(newArr);

    

   }






  return (
    <>
        <section id={id} className={styles["task-list"]}>
      
      <div className={ isDone?styles["taskDone"]: styles["task"]}  onClick={(e)=>clickHandler(e)}  >
          {isDone&&<div className={styles.bar}></div>}
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