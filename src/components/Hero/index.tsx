import Header from "../Header";
import styles from "./hero.module.scss";
import Image from "next/image";
import RightArrow from "../../../public/rightArrow.svg";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className="container">
        <Header />
        <div className={styles.heroInfo}>
          <h1 className={styles.heroTitle}>
            Design de unhas e limpeza de pele
          </h1>
          <p className={styles.heroDescription}>
            Saves all your indispensable Data & Files Completly
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=554195210190&text=Marque%20um%20hor%C3%A1rio!"
            className={styles.heroButton}
          >
            Faça um orçamento
            <Image src={RightArrow} alt="RightArrow" />
          </a>
        </div>
      </div>
    </div>
  );
}
