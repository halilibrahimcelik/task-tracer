import React from 'react';


import Newlist from '../newList/Newlist';

const TaskList = ({data, isDoneHandler}) => {
 console.log(data)

  return (

    <>
      {data.map((taskData,index)=>{
        const {task,date,time, isDone,id}=taskData
    return  ( <Newlist task={task} date={date} time={time} key={index}  id={id} isDone={isDone} isDoneHandler={isDoneHandler} />  )
      
      })}
    </>
        )
}

export default TaskList