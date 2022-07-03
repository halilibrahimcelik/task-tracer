import React from 'react'
import Card from '../card/Card';
import styles from "./wrapper.module.scss";
const Wrapper = () => {
  return (
    <>
    <main className={styles.wrapper}>
  <Card/>
    </main>

    </>
  )
}

export default Wrapper