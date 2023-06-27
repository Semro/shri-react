"use client";

import { useEffect } from "react";

import { Sidebar } from "@/components/Sidebar/Sidebar";
import { TicketCard } from "@/components/TicketCard/TicketCard";
import { useAppSelector } from "@/hooks/redux";
import { InitialState } from "@/redux/features/filters";
import { useLazyGetMoviesByCinemaIdQuery } from "@/redux/services/api";
import { Movie } from "@/redux/services/apiTypes";

import styles from "./Main.module.css";

const filterMovies = (movies: Movie[], filters: InitialState) => {
  const { name, genre } = filters;
  let filteredMovies = movies;
  if (genre) {
    filteredMovies = filteredMovies.filter((movie) => movie.genre === genre);
  }
  if (name) {
    filteredMovies = filteredMovies.filter((movie) =>
      movie.title.toLowerCase().includes(name.trim().toLowerCase())
    );
  }
  return filteredMovies;
};

const getTicketsElements = (movies: Movie[]) =>
  movies.map((props) => <TicketCard key={props.id} {...props} />);

export const Main = () => {
  const [getMovies, { data: movies }] = useLazyGetMoviesByCinemaIdQuery();
  const filters = useAppSelector((state) => state.filters);

  useEffect(() => {
    getMovies(filters.cinema);
  }, [getMovies, filters.cinema]);

  return (
    <div className={styles.root}>
      <Sidebar />
      <div className={styles.tickets}>
        {!!movies && getTicketsElements(filterMovies(movies, filters))}
      </div>
    </div>
  );
};
