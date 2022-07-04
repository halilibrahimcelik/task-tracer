import React,{useEffect, useState} from 'react'
import styles from "./editTask.module.scss"
const EditTask = (props) => {
    const {editTaskHandler,showModalHandler,id,editedData}=props;
    const [initialTask, setInitialTask] = useState("");
    const [initialDate, setInitialDate] = useState("");
    const {task,date}=editedData[0];

// console.log(task,date)
    useEffect(()=>{
        setInitialTask(task);
        setInitialDate(date);

    },[task,date])

    // console.log(editedData)
const submitHandler=(e)=>{
    e.preventDefault();
const newArr={
    task:initialTask,
    date:initialDate
}


editTaskHandler(id,initialTask,initialDate)

    setInitialDate("");
    setInitialTask("");
}


  return (
    <>
        <div className={styles.container}  >
            <form  className={styles["form-area"]} onSubmit={(e)=>submitHandler(e)} >
            <div>
                <label htmlFor="task">Task</label>
                 <input type="text" id='task'  value={initialTask} maxLength={25} onChange={(e)=>setInitialTask(e.target.value)}  />
            </div>
             <div>
                 <label htmlFor="date"  >Day&Time</label>
                 <input type="date" value={initialDate} min="2019-01-01" max="2025-12-31"  onChange={(e)=>setInitialDate(e.target.value)} />
             </div>
            
             <button className={styles.btn} >Edit Task</button>
            
             <button className={styles.btn} onClick={()=>showModalHandler()} >Close</button>
            
                </form>
        </div>
    </>
  )
}

export default EditTask