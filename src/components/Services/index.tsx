import styles from "./services.module.scss";
import CardGrid from "./CardGrid";

export default function Services() {
  return (
    <div className={styles.services}>
      <div className="container">
        <h2 className={styles.title}>Serviços</h2>
        <h3 className={styles.subtitle}>
          Conheça nossos serviços e nossa galeria!
        </h3>
        <CardGrid />
      </div>
    </div>
  );
}
