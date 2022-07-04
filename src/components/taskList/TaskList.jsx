import React from 'react';


import Newlist from '../newList/Newlist';

const TaskList = ({data, isDoneHandler,onRemoveTaskHandler,onEditTaskHandler,editedData}) => {
//  console.log(data)

  return (

    <>
      {data.map((taskData,index)=>{
        const {task,date,time, isDone,id}=taskData
    return  ( <Newlist task={task} date={date} time={time} key={index}  editedData={editedData} id={id} isDone={isDone} index={index} onEditTaskHandler={onEditTaskHandler} onRemoveTaskHandler={onRemoveTaskHandler} isDoneHandler={isDoneHandler} />  )
      
      })}
    </>
        )
}

export default TaskList