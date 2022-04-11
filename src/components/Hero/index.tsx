import Header from "../Header";
import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className="container">
        <Header />
        <div className={styles.heroInfo}>
          <h1 className={styles.heroTitle}>The Most Reliable Data Recovery Tool</h1>
          <p className={styles.heroDescription}>Saves all your indispensable Data & Files Completly</p>
          <button className={styles.heroButton}>Faça um orçamento</button>
        </div>
      </div>
    </div>
  );
}
