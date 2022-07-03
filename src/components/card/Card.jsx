import React from 'react'
import AddTask from '../addTask/AddTask';
import styles from "./card.module.scss";

const Card = () => {
  return (
    <section className={styles.card}>

<h1>Header</h1>
<AddTask/>
    </section>
  )
}

export default Card