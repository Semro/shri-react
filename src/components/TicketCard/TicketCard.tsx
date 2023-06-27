import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, memo, useState } from "react";

import { Card } from "@/components/Card/Card";
import { Counter } from "@/components/Counter/Counter";
import { Modal } from "@/components/Modal/Modal";
import { useAppDispatch } from "@/hooks/redux";
import CloseSvg from "@/public/assets/icons/close.svg";
import { remove } from "@/redux/features/cart";
import { localizeGenre } from "@/utils/localizeGenre";

import styles from "./TicketCard.module.css";

interface Props {
  id: string;
  genre: string;
  posterUrl: string;
  title: string;
  isRemovable?: boolean;
}

export const TicketCard: FunctionComponent<Props> = memo(
  ({ id, genre, posterUrl, title, isRemovable = false }) => {
    const dispatch = useAppDispatch();
    const [showModal, setShowModal] = useState(false);

    const handleRemove = () => {
      setShowModal(true);
    };

    const handleChoie = (choice: boolean) => {
      setShowModal(false);
      if (choice) dispatch(remove(id));
    };

    return (
      <Card className={styles.root}>
        <Image
          src={posterUrl}
          alt={title}
          width={100}
          height={120}
          className={styles.poster}
        />
        <div className={styles.content}>
          <div className={styles.description}>
            <Link href={`/movie/${id}`} prefetch={false}>
              <h3>{title}</h3>
            </Link>
            <p>{localizeGenre(genre)}</p>
          </div>
          <div className={styles.actions}>
            <Counter movieId={id} inCart={isRemovable} />
            {isRemovable && (
              <>
                <button className={styles.remove} onClick={handleRemove}>
                  <CloseSvg className={styles.closeSvg} />
                </button>
                {showModal && (
                  <Modal
                    title="Удаление билета"
                    dialog="Вы уверены, что хотите удалить билет?"
                    onChoice={handleChoie}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </Card>
    );
  }
);

TicketCard.displayName = "TicketCard";
