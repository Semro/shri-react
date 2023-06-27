import { FunctionComponent } from "react";

import { Card } from "@/components/Card/Card";
import PhotoSvg from "@/public/assets/icons/photo.svg";

import styles from "./ReviewCard.module.css";

interface Props {
  name: string;
  rating: number;
  text: string;
}

export const ReviewCard: FunctionComponent<Props> = ({
  name,
  rating,
  text,
}) => {
  return (
    <Card className={styles.root}>
      <div className={styles.avatar}>
        <PhotoSvg className={styles.photo} />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3>{name}</h3>
          <div>
            <span>Оценка: </span>
            <strong>{rating}</strong>
          </div>
        </div>
        <p>{text}</p>
      </div>
    </Card>
  );
};
