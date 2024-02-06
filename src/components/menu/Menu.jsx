import Link from 'next/link'
import React from 'react'
import styles from './menu.module.css'
import Image from 'next/image'

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>Travel</span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, animi.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Dandi Hermawan</span>
              <span className={styles.date}> - 06.02.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>Culture</span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, animi.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Dandi Hermawan</span>
              <span className={styles.date}> - 06.02.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.coding}`}>Coding</span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, animi.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Dandi Hermawan</span>
              <span className={styles.date}> - 06.02.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.trading}`}>Trading</span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, animi.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Dandi Hermawan</span>
              <span className={styles.date}> - 06.02.2024</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Menu
