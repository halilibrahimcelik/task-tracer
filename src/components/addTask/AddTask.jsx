import React,{useState} from 'react'
import styles from "./addTask.module.scss";
const AddTask = () => {
    const [initialTask, setinitialTask] = useState("");
    const [initialDate, setinitialDate] = useState("");

    const submitHandler=(e)=>{
        e.preventDefault();
console.log(initialDate,initialTask);
setinitialDate("");
setinitialTask("");
    }

  return (
    <section>

    <form  className={styles["form-area"]} onSubmit={(e)=>submitHandler(e)}>
        <div>
            <label htmlFor="task">Task</label>
             <input type="text" id='task'  value={initialTask} onChange={(e)=> setinitialTask(e.target.value)} />
        </div>
 <div>
     <label htmlFor="date">Day&Time</label>
     <input type="date" value={initialDate}  onChange={(e)=>setinitialDate(e.target.value)} />
 </div>

 <button className={styles.btn} >Save Task</button>


    </form>

    </section>
  )
}

export default AddTask