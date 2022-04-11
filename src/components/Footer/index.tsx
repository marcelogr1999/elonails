import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerInfo}>
          <span>© 2022 | Elonails | Todos os direitos reservados</span>
          <span>Desenvolvido por Marcelo Ribeiro</span>
        </div>
      </div>
    </footer>
  );
}
