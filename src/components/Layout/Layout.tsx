import { FunctionComponent, PropsWithChildren } from "react";

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";

import styles from "./Layout.module.css";

export const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.main}>{children}</main>
      <div id="dropdownContainer" />
      <Footer />
    </div>
  );
};
