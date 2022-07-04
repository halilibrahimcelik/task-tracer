import React,{useEffect, useState} from 'react'
import styles from "./editTask.module.scss"
const EditTask = (props) => {
    const {editTaskHandler,showModalHandler,id,currentData}=props;
    const {date,task}=currentData;
    const [initialTask, setInitialTask] = useState("");
    const [initialDate, setInitialDate] = useState("");



    useEffect(()=>{
        setInitialTask(task);
        setInitialDate(date);

    },[task,date])
const submitHandler=(e)=>{
    e.preventDefault();
    setTimeout(()=>{showModalHandler()},100)
    
    if(initialTask==="" ||initialDate===""){

     alert("Please fill in the blans")
        }

editTaskHandler(id,initialTask,initialDate)

    setInitialDate("");
    setInitialTask("");

}
const closeModalHandler=()=>{


}

  return (
    <>
        <div className={styles.container}  onClick={()=>closeModalHandler()}  >
            <form  className={styles["form-area"]} onSubmit={(e)=>submitHandler(e)} >
            <div>
                <label htmlFor="task">Task</label>
                 <input type="text" id='task'  value={initialTask} maxLength={25} onChange={(e)=>setInitialTask(e.target.value)}  />
            </div>
             <div>
                 <label htmlFor="date">Day&Time</label>
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