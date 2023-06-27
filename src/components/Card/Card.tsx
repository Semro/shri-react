import classNames from "classnames";
import { FunctionComponent, HTMLAttributes } from "react";

import styles from "./Card.module.css";

interface Props {
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

export const Card: FunctionComponent<HTMLAttributes<Props>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={classNames(styles.root, className)} {...props}>
      {children}
    </div>
  );
};
