import classNames from "classnames";
import { FunctionComponent, MouseEventHandler, PropsWithChildren } from "react";

import styles from "./ButtonMain.module.css";

interface Props {
  type: "primary" | "secondary";
  onClickHandler: MouseEventHandler<HTMLButtonElement>;
}

export const ButtonMain: FunctionComponent<PropsWithChildren<Props>> = ({
  type,
  onClickHandler,
  children,
}) => {
  return (
    <button
      className={classNames(
        styles.button,
        type === "primary" && styles.primary,
        type === "secondary" && styles.secondary
      )}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};
