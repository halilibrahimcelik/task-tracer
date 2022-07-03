import React from 'react'
import styles from "./addTask.module.scss";
const AddTask = () => {
  return (
    <section>

    <form  className={styles["form-area"]}>
        <div>
            <label htmlFor="task">Task</label>
             <input type="text" id='task' />
        </div>
 <div>
     <label htmlFor="date">Day&Time</label>
     <input type="date" />
 </div>

 <button className={styles.btn} >Save Task</button>


    </form>

    </section>
  )
}

export default AddTask