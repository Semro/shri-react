import { FunctionComponent, useState } from "react";

import { ButtonDefault } from "@/components/Buttons/ButtonDefault/ButtonDefault";
import { Modal } from "@/components/Modal/Modal";
import { useAppSelector, useAppDispatch } from "@/hooks/redux";
import { decrement, increment } from "@/redux/features/cart";
import { getTicketAmount } from "@/redux/features/cart/selectors";

import styles from "./Counter.module.css";

interface Props {
  movieId: string;
  inCart?: boolean;
}

export const Counter: FunctionComponent<Props> = ({
  movieId,
  inCart = false,
}) => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useAppDispatch();
  const amount = useAppSelector((state) => getTicketAmount(state, movieId));

  const onIncrementTicket = () => {
    dispatch(increment(movieId));
  };

  const onDecrementTicket = () => {
    if (amount === 1 && inCart) {
      setShowModal(true);
      return;
    }
    dispatch(decrement(movieId));
  };

  const handleChoice = (choice: boolean) => {
    setShowModal(false);
    if (choice) dispatch(decrement(movieId));
  };

  return (
    <div className={styles.counter}>
      <ButtonDefault
        type="minus"
        onClickHandler={onDecrementTicket}
        isDisabled={amount === 0}
      />
      <strong>{amount}</strong>
      <ButtonDefault
        type="plus"
        onClickHandler={onIncrementTicket}
        isDisabled={amount >= 30}
      />
      {showModal && (
        <Modal
          title="Удаление билета"
          dialog="Вы уверены, что хотите удалить билет?"
          onChoice={handleChoice}
        />
      )}
    </div>
  );
};
