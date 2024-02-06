import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
return (
<div className={styles.container}>
  <div className={styles.imageContainer}>
    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
  </div>
  <div className={styles.textContainer}>
    <div className={styles.detail}>
      <span className={styles.date}>06.02.2024 - </span>
      <span className={styles.category}>CULTURE</span>
    </div>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
    <p className={styles.desc}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptatum veritatis quae eligendi nobis perspiciatis
      quibusdam labore praesentium dolorum nihil natus atque sit nemo, animi, expedita corrupti molestiae, laborum quo!
    </p>
    <Link href="/" className={styles.link}>Read More</Link>
  </div>
</div>
);
};

export default Card;