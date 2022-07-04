import React, { useState,useEffect } from 'react'
import ToggleButton from '../../toggleButton/ToggleButton';
import AddTask from '../addTask/AddTask';
import TaskList from '../taskList/TaskList';
import styles from "./card.module.scss";

const Card = () => {

const [initialData,setData]=useState([]);
const [isShow,setShow]=useState(false);
const [editedData,setEditedData]=useState([{task:"", date:""}])

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

const editTaskHandler=(id,task,date)=>{
  let hour=new Date().toTimeString().split(' ')[0].slice(0,5);
const editedTask=initialData.filter((task)=> task.id===id).map(
  ()=>({task:task,date:date, time:hour, id:id, isDone:false})
)
console.log(editedTask);
 let newArr=[];

const localData=JSON.parse(localStorage.getItem("Tasks"));
console.log(localData)
localData.map((data)=>{
  let returnData;
  if(data.id===id){
   returnData=Object.assign(data,editedTask);//!replacing new Input with the old ones;
   
  newArr.push(returnData[0])
  }
  return newArr

})
setEditedData(editedTask);
console.log(newArr);
setData([...newArr])
}
  return (
    <section className={styles.card}>

<h1>Task-Tracker</h1>
<ToggleButton onToggle={onToggleHandler}  isShow={isShow} />
{!isShow?<AddTask onTaskHandler={addTaskHandler}  onToggle={onToggleHandler}/>:null

}


{initialData.length===0?null:<TaskList  data={initialData} editedData={editedData}  isDoneHandler={isDoneHandler} onEditTaskHandler={editTaskHandler}  onRemoveTaskHandler={removeTaskHandler}/>}

    </section>
  )
}

export default Card