import styles from "./card.module.scss";
import Service from "../../../../public/service.svg";
import Link from "next/link";
import Image from "next/image";

export default function Card() {
  return (
    <div className={styles.card}>
      <Image src={Service} alt="Service" height={80} layout="responsive" objectFit="cover" />
      <div className={styles.cardContent}>
        <span className={styles.cardTitle}>Nails Design</span>
        <span className={styles.cardDescription}>
          Nail design include research and analysis, overseeing a variety of
          design projects.
        </span>
        <Link href="/">
          <a className={styles.cardAction}>Visualizar Galeria</a>
        </Link>
      </div>
    </div>
  );
}
