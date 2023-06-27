import Link from "next/link";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <Link href="/qa" prefetch={false}>
        <span>Вопросы-ответы</span>
      </Link>
      <Link href="/about" prefetch={false}>
        <span>О нас</span>
      </Link>
    </footer>
  );
};
