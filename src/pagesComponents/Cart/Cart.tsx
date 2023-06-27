"use client";

import { Card } from "@/components/Card/Card";
import { TicketCard } from "@/components/TicketCard/TicketCard";
import { useAppSelector } from "@/hooks/redux";
import { InitialState } from "@/redux/features/cart";
import { getTicketSummary } from "@/redux/features/cart/selectors";
import { useGetMoviesByCinemaIdQuery } from "@/redux/services/api";
import { Movie } from "@/redux/services/apiTypes";

import styles from "./Cart.module.css";

const filterTicketsByCart = (movies: Movie[], cart: InitialState) => {
  const movieIdsInCart = Object.keys(cart);
  return movies.filter((movie) => movieIdsInCart.includes(movie.id));
};

const getTicketsElements = (movies: Movie[]) =>
  movies.map((props) => <TicketCard key={props.id} {...props} isRemovable />);

export const Cart = () => {
  const { data: movies } = useGetMoviesByCinemaIdQuery();
  const cart = useAppSelector((state) => state.cart);
  const summary = useAppSelector(getTicketSummary);

  return (
    <>
      <div className={styles.ticketCards}>
        {movies && <>{getTicketsElements(filterTicketsByCart(movies, cart))}</>}
      </div>
      {summary > 0 && (
        <Card className={styles.summary}>
          <strong>Итого билетов:</strong>
          <strong>{summary}</strong>
        </Card>
      )}
    </>
  );
};
