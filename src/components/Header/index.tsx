import Image from "next/image";
import Logo from "../../../public/Logo.svg";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src={Logo} alt="Elonails" />
      <ul className={styles.headerMenu}>
        <li>
          <a href="">Serviços</a>
        </li>
        <li>
          <a href="">Localização</a>
        </li>
        <li>
          <button className={styles.headerButton}>(41) 99622-0759</button>
        </li>
      </ul>
    </header>
  );
}
