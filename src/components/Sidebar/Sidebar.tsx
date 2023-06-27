import { useCallback } from "react";

import { Card } from "@/components/Card/Card";
import { Input } from "@/components/Input/Input";
import { Select } from "@/components/Select/Select";
import { useAppSelector, useAppDispatch } from "@/hooks/redux";
import {
  setFilterCinema,
  setFilterGenre,
  setFilterMovie,
} from "@/redux/features/filters";
import {
  useGetCinemasQuery,
  useGetMoviesByCinemaIdQuery,
} from "@/redux/services/api";
import { Cinema, Movie } from "@/redux/services/apiTypes";
import { localizeGenre } from "@/utils/localizeGenre";

import styles from "./Sidebar.module.css";

const getSelectGenreValues = (movies: Movie[]) =>
  Array.from(new Set(movies.map((movie) => movie.genre))).map((genre) => ({
    id: genre,
    value: localizeGenre(genre) ?? genre,
  }));

const getSelectCinemaValues = (cinemas: Cinema[]) =>
  cinemas.map((cinema) => ({
    id: cinema.id,
    value: cinema.name,
  }));

export const Sidebar = () => {
  const dispatch = useAppDispatch();
  const { data: movies } = useGetMoviesByCinemaIdQuery();
  const { data: cinemas } = useGetCinemasQuery();

  const {
    name: nameValue,
    genre: genreValue,
    cinema: cinemaValue,
  } = useAppSelector((state) => state.filters);

  const handleGenreSelected = (id: string | null) => {
    dispatch(setFilterGenre(id));
  };

  const handleCinemaSelected = (id: string | null) => {
    dispatch(setFilterCinema(id));
  };

  const handleNameChanged = useCallback(
    (value: string) => {
      console.log(value);
      dispatch(setFilterMovie(value));
    },
    [dispatch]
  );

  return (
    <Card className={styles.sidebar}>
      <h4>Фильтр поиска</h4>
      <Input
        name="Название"
        placeholder="Введите название"
        initialValue={nameValue ?? ""}
        onChangeValue={handleNameChanged}
      />
      <Select
        name="Жанр"
        placeholder="Выберите жанр"
        options={movies ? getSelectGenreValues(movies) : []}
        valueId={genreValue}
        onSelected={handleGenreSelected}
      />
      <Select
        name="Кинотеатр"
        placeholder="Выберите кинотеатр"
        options={cinemas ? getSelectCinemaValues(cinemas) : []}
        valueId={cinemaValue}
        onSelected={handleCinemaSelected}
      />
    </Card>
  );
};
