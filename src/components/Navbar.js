import React from 'react'
import styles from '../styles/Navbar.module.css'
function Navbar() {
  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
          <div className={styles.text}>Best Sellers </div>
          <div className={styles.text}>Gift Ideas </div>
          <div className={styles.text}>New Releases </div>
          <div className={styles.text}>Today's Deals </div>
          <div className={styles.text}>Customer Service </div>
      </div>
    </div>
  )
}

export default Navbar