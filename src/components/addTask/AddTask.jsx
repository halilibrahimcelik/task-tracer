import React,{useState} from 'react'
import styles from "./addTask.module.scss";
import Warning from '../warning/Warning';
const AddTask = (props) => {
    const {onTaskHandler}=props
    const [initialTask, setinitialTask] = useState("");
    const [initialDate, setinitialDate] = useState("");
    const [isValid,setValid]=useState(false);
    const[isDone,setDone]=useState(false);
  
    let hour=new Date().toTimeString().split(' ')[0].slice(0,5);




    const submitHandler=(e)=>{
        e.preventDefault();
// console.log(initialDate,initialTask);
if(initialTask==="" ||initialDate===""){
   console.log("please fill the blank");
setValid(true)
   return
   
}

setinitialDate("");
setinitialTask("");



const newTask={
    task:initialTask,
    date:initialDate,
    time:hour,
    isDone:false,
    id:Math.random().toString()
}

onTaskHandler(newTask);
// console.log(newTask)
    }

  const  onValidHandler=()=>{
    setValid(false)
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
     <input type="date" value={initialDate}  min="2019-01-01" max="2025-12-31" onChange={(e)=>setinitialDate(e.target.value)} />
 </div>

 <button className={styles.btn} >Save Task</button>


    </form>


{isValid&& <Warning   onValid={onValidHandler} />}
    </section>
  )
}

export default AddTask