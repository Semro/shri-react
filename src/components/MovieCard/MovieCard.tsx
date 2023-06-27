import Image from "next/image";
import { FunctionComponent } from "react";

import { Card } from "@/components/Card/Card";
import { Counter } from "@/components/Counter/Counter";
import { localizeGenre } from "@/utils/localizeGenre";

import styles from "./MovieCard.module.css";

interface Props {
  id: string;
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: string;
  rating: number;
  director: string;
}

export const MovieCard: FunctionComponent<Props> = ({
  id,
  title,
  posterUrl,
  releaseYear,
  description,
  genre,
  rating,
  director,
}) => {
  return (
    <Card className={styles.info}>
      <Image
        src={posterUrl}
        alt={title}
        width={400}
        height={500}
        className={styles.poster}
      />
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.title}>
            <div>
              <h1>{title}</h1>
            </div>
            <Counter movieId={id} />
          </div>
          <div className={styles.meta}>
            <div>
              <strong>Жанр: </strong>
              <span>{localizeGenre(genre)}</span>
            </div>
            <div>
              <strong>Год выпуска: </strong>
              <span>{releaseYear}</span>
            </div>
            <div>
              <strong>Рейтинг: </strong>
              <span>{rating}</span>
            </div>
            <div>
              <strong>Режиссер: </strong>
              <span>{director}</span>
            </div>
          </div>
        </div>
        <div className={styles.description}>
          <h3>Описание</h3>
          <p>{description}</p>
        </div>
      </div>
    </Card>
  );
};
