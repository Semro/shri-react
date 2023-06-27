"use client";

import classNames from "classnames";
import Link from "next/link";

import { useAppSelector } from "@/hooks/redux";
import BasketSvg from "@/public/assets/icons/basket.svg";
import { getTicketSummary } from "@/redux/features/cart/selectors";

import styles from "./Header.module.css";

const Summary = () => {
  const summary = useAppSelector(getTicketSummary);

  if (summary === 0) return undefined;
  return (
    <div className={classNames(styles.counter, styles.counterNumber)}>
      {summary}
    </div>
  );
};

export const Header = () => {
  return (
    <header className={styles.root}>
      <Link href="/" prefetch={false}>
        <span className={styles.title}>Билетопоиск</span>
      </Link>
      <div className={styles.cart}>
        <Summary />
        <Link href="/cart" prefetch={false}>
          <BasketSvg className={styles.basket}></BasketSvg>
        </Link>
      </div>
    </header>
  );
};
