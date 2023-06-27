import { FunctionComponent, MouseEventHandler } from "react";
import { createPortal } from "react-dom";

import { ButtonMain } from "@/components/Buttons/ButtonMain/ButtonMain";
import { Card } from "@/components/Card/Card";
import CloseSvg from "@/public/assets/icons/close.svg";

import styles from "./Modal.module.css";

interface Props {
  title: string;
  dialog: string;
  onChoice: Function;
}

const ModalElement: FunctionComponent<Props> = ({
  title,
  dialog,
  onChoice,
}) => {
  const handleBackgrondAreaClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === e.currentTarget) onChoice(false);
  };

  return (
    <div className={styles.root} onClick={handleBackgrondAreaClick}>
      <Card className={styles.modal}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h3>{title}</h3>
            <button onClick={() => onChoice(false)}>
              <CloseSvg className={styles.close} />
            </button>
          </div>
          <div>{dialog}</div>
        </div>
        <div className={styles.buttons}>
          <ButtonMain onClickHandler={() => onChoice(true)} type="primary">
            Да
          </ButtonMain>
          <ButtonMain onClickHandler={() => onChoice(false)} type="secondary">
            Нет
          </ButtonMain>
        </div>
      </Card>
    </div>
  );
};

export const Modal: FunctionComponent<Props> = (props) => {
  return createPortal(<ModalElement {...props} />, document.body);
};
