"use client";

import classNames from "classnames";
import { FunctionComponent, PropsWithChildren, useState } from "react";

import { Card } from "@/components/Card/Card";
import ArrowSvg from "@/public/assets/icons/arrow.svg";

import styles from "./Accordion.module.css";

interface Props {
  title: string;
}

export const Accordion: FunctionComponent<PropsWithChildren<Props>> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickHandler = () => setIsOpen(!isOpen);

  return (
    <Card className={styles.root} onClick={onClickHandler}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {isOpen && <div className={styles.children}>{children}</div>}
      </div>
      <div>
        <ArrowSvg
          className={classNames(styles.arrow, isOpen && styles.arrowOpen)}
        />
      </div>
    </Card>
  );
};
