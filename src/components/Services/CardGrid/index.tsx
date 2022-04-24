import Card from "../Card";
import styles from "./cardGrid.module.scss";
export default function CardGrid() {
  return (
    <div className={styles.cardGrid}>
      {Array.from({ length: 8 }, (_, index) => (
        <Card key={index}/>
      ))}
    </div>
  );
}
