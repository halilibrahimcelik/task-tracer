import React, {useState} from 'react';
import styles from "./taskList.module.scss";

import Newlist from '../newList/Newlist';

const TaskList = ({data}) => {
 console.log(data)

  return (

    <>
      {data.map((taskData,index)=>{
        const {task,date,time,id}=taskData
    return  ( <Newlist task={task} date={date} time={time} key={index} />  )
      
      })}
    </>
        )
}

export default TaskList