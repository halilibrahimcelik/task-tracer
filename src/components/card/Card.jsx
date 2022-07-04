import React, { useState,useEffect } from 'react'
import ToggleButton from '../../toggleButton/ToggleButton';
import AddTask from '../addTask/AddTask';
import TaskList from '../taskList/TaskList';
import styles from "./card.module.scss";

const Card = () => {

const [initialData,setData]=useState([]);
const [isShow,setShow]=useState(false);


 //!LocalStorage
      useEffect(() => {
        const localData = localStorage.getItem("Tasks");
    
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

const localData=JSON.parse(localStorage.getItem("Tasks"));


const newfilteredTASK=localData.filter((data)=> data.id!==id)



newfilteredTASK.push(editedTask[0])

setData([...newfilteredTASK])
}
  return (
    <section className={styles.card}>


<ToggleButton onToggle={onToggleHandler}  isShow={isShow} />
{!isShow?<AddTask onTaskHandler={addTaskHandler}  onToggle={onToggleHandler}/>:null

}


{initialData.length===0?null:<TaskList  data={initialData}   isDoneHandler={isDoneHandler} onEditTaskHandler={editTaskHandler}  onRemoveTaskHandler={removeTaskHandler}/>}

    </section>
  )
}

export default Card