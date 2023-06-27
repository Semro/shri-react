import classNames from "classnames";
import { FunctionComponent, MouseEventHandler } from "react";

import MinusSvg from "@/public/assets/icons/minus.svg";
import PlusSvg from "@/public/assets/icons/plus.svg";

import styles from "./ButtonDefault.module.css";

interface Props {
  type: "plus" | "minus";
  isDisabled?: boolean;
  onClickHandler: MouseEventHandler<HTMLButtonElement>;
}

export const ButtonDefault: FunctionComponent<Props> = ({
  type,
  isDisabled = false,
  onClickHandler,
}) => {
  return (
    <button
      className={classNames(styles.button, isDisabled && styles.disabled)}
      onClick={isDisabled ? undefined : onClickHandler}
    >
      {type === "plus" && <PlusSvg className={styles.icon} />}
      {type === "minus" && <MinusSvg className={styles.icon} />}
    </button>
  );
};
