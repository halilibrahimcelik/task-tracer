import React,{useState,useEffect} from 'react'
import styles from "./newList.module.scss";
import { MdDeleteSweep } from 'react-icons/md'
import { BiEdit } from 'react-icons/bi';
import EditTask from '../editTask/EditTask';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Newlist = (props) => {
  const  {task,date,time,isDone ,isDoneHandler,id,onRemoveTaskHandler,index, onEditTaskHandler}=props;
    const[isClicked,setClicked] =useState(true);
    const [showModal,setModal]=useState(false);
    const [isToggle,setToggle]=useState(false);
    const [currentData,setCurrentData]=useState("");


    
    const clickHandler=(e)=>{
      
setClicked(!isClicked);

  const newArr=[{
    isDone:isClicked?true:false,
    id:id
  }]
 

   
isDoneHandler(newArr);

    

   }


   const notify = () => toast.info(`Are you Sure? 
   If you are sure click me again I dare You
   `, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

   const removeTaskHandler=()=>{
    if(!isToggle){
      notify();
      setToggle(true)
    }else{

      onRemoveTaskHandler(index);
      setToggle(false);
    }
   
   }



const showModalHandler=()=>{
 
  setModal(!showModal);
  setCurrentData({task:task,date:date})
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
   <ToastContainer 
   position="top-right"
   autoClose={5000}
   hideProgressBar={false}
   newestOnTop={false}
   closeOnClick
   rtl={false}
   pauseOnFocusLoss
   draggable
   pauseOnHover/>
{showModal?   <EditTask  currentData={currentData}   id={id} isDone={isDone} editTaskHandler={onEditTaskHandler}  showModalHandler={showModalHandler} />:null}
  </section>
    </>
  )
}

export default Newlist