import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '@/components/themeToggle/ThemeToggle'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <dir className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24}/>
        <Image src="/instagram.png" alt="instagram" width={24} height={24}/>
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24}/>
        <Image src="/youtube.png" alt="youtube" width={24} height={24}/>
      </dir> 
      <dir className={styles.logo}>Jagongan</dir>
      <dir className={styles.links}>
        <ThemeToggle/>
        <Link href="/"className={styles.link}>Home</Link>
        <Link href="/"className={styles.link}>Contact</Link>
        <Link href="/"className={styles.link}>About</Link>
        <AuthLinks/>
      </dir>
    </div>
  )
}

export default Navbar
