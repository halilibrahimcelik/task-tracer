import React from 'react'
import Card from '../card/Card';
import styles from "./wrapper.module.scss";
const Wrapper = ({taskData, onAddTask}) => {
  return (
    <>
    <main className={styles.wrapper}>
  <Card taskData={taskData} onAddTask={onAddTask} />
    </main>

    </>
  )
}

export default Wrapper