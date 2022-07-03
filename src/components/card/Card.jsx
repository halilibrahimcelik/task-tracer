import React, { useState,useEffect } from 'react'
import AddTask from '../addTask/AddTask';
import TaskList from '../taskList/TaskList';
import styles from "./card.module.scss";

const Card = () => {

const [initialData,setData]=useState([]);
console.log(initialData);
 //!LocalStorage
      useEffect(() => {
        const localData = localStorage.getItem("Tasks");
        console.log(localData);
        if (localData) {
        
          setData(JSON.parse(localData));
        }
   
      }, []);

      useEffect(() => {
       localStorage.setItem("Tasks", JSON.stringify(initialData));
      }, [initialData]);
    
      const addTaskHandler = (newTask) => {
        setData((prevTask) => {
          return [newTask, ...prevTask];
        });
      };




  return (
    <section className={styles.card}>

<h1>Task-Tracker</h1>
<AddTask onTaskHandler={addTaskHandler}  />
{initialData.length===0?null:<TaskList  data={initialData} />}

    </section>
  )
}

export default Card