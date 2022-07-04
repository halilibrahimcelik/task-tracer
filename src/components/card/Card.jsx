import React, { useState,useEffect } from 'react'
import ToggleButton from '../../toggleButton/ToggleButton';
import AddTask from '../addTask/AddTask';
import TaskList from '../taskList/TaskList';
import styles from "./card.module.scss";

const Card = () => {

const [initialData,setData]=useState([]);
const [isShow,setShow]=useState(false);
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


    //!!Updating localStorage value
const isDoneHandler =(newTask)=>{
const {id,isDone}=newTask[0]

const localData=JSON.parse(localStorage.getItem("Tasks"));
console.log(+id,isDone);
console.log(localData)
let newArr=[]
localData.map((data)=>{
  if(data.id===id){
 data.isDone=isDone
  }
  return newArr.push(data);

})

console.log(newArr);
setData([...newArr])
;
}

const onToggleHandler=()=>{
  setShow(!isShow)

}

const removeTaskHandler=(index)=>{
  let taskList = initialData;
  taskList.splice(index, 1);
  console.log(taskList);
  setData([...taskList]);
}

  return (
    <section className={styles.card}>

<h1>Task-Tracker</h1>
<ToggleButton onToggle={onToggleHandler}  isShow={isShow} />
{!isShow?<AddTask onTaskHandler={addTaskHandler}  onToggle={onToggleHandler}/>:null

}


{initialData.length===0?null:<TaskList  data={initialData}  isDoneHandler={isDoneHandler}  onRemoveTaskHandler={removeTaskHandler}/>}

    </section>
  )
}

export default Card