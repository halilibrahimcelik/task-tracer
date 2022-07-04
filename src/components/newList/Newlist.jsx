import React,{useState,useEffect} from 'react'
import styles from "./newList.module.scss";
import { MdDeleteSweep } from 'react-icons/md'
import { BiEdit } from 'react-icons/bi';
import EditTask from '../editTask/EditTask';
const Newlist = (props) => {
  const  {task,date,time,isDone ,isDoneHandler,id,onRemoveTaskHandler,index, onEditTaskHandler,editedData}=props;
    const[isClicked,setClicked] =useState(true);
    const [showModal,setModal]=useState(false);


    
    const clickHandler=(e)=>{
      
setClicked(!isClicked);

  const newArr=[{
    isDone:isClicked?true:false,
    id:id
  }]
 

   
isDoneHandler(newArr);

    

   }



   const removeTaskHandler=()=>{
    onRemoveTaskHandler(index)
   
   }



const showModalHandler=()=>{
  setModal(!showModal)
}
  return (
    <>
        <section id={id} className={styles["task-list"]}>
      
      <div className={ isDone?styles["taskDone"]: styles["task"]}  onClick={(e)=>clickHandler(e)}  >
          {isDone&&<div className={styles.bar}></div>}
          <h3 className={styles["task-name"]}>
       Task: {task}
          </h3>
          <p className={styles["task-date"]}>
             <strong>Due Date:</strong> {date}
          </p>
          <p className={styles["task-date"]}>
             <strong>Initialized time :</strong>  {time}
          </p>
      </div>

   <BiEdit className= {styles.iconEdit} onClick={()=>showModalHandler()}  />
   < MdDeleteSweep className= {styles.icon} onClick={()=>removeTaskHandler()} />
{showModal?   <EditTask   editedData={editedData} id={id} isDone={isDone} editTaskHandler={onEditTaskHandler}  showModalHandler={showModalHandler} />:null}
  </section>
    </>
  )
}

export default Newlist