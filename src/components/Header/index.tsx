import Image from "next/image";
import Logo from "../../../public/Logo.svg";
import Whatsapp from "../../../public/whatsapp.svg";
import styles from "./header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src={Logo} alt="Elonails" />
      <ul className={styles.headerMenu}>
        <Link href="/">
          <a className={styles.headerMenuItem}>Serviços</a>
        </Link>
        <Link href="/">
          <a className={styles.headerMenuItem}>Localização</a>
        </Link>
        <li>
          <a
            href="https://api.whatsapp.com/send?phone=554195210190&text=Marque%20um%20hor%C3%A1rio!"
            className={styles.headerButton}
          >
            <Image src={Whatsapp} alt="Whatsapp" />
            <span className={styles.headerButtonText}>(41) 99622-0759</span>
          </a>
        </li>
      </ul>
    </header>
  );
}
