import React, { useState } from 'react'
import AddTask from '../addTask/AddTask';
import TaskList from '../taskList/TaskList';
import styles from "./card.module.scss";

const Card = () => {

  return (
    <section className={styles.card}>

<h1>Task-Tracker</h1>
<AddTask/>
<TaskList/>
<TaskList />
    </section>
  )
}

export default Card