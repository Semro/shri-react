"use client";

import { FunctionComponent } from "react";

import { MovieCard } from "@/components/MovieCard/MovieCard";
import { ReviewCard } from "@/components/ReviewCard/ReviewCard";
import {
  useGetMovieByMovieIdQuery,
  useGetReviewsByMovieIdQuery,
} from "@/redux/services/api";
import { Review } from "@/redux/services/apiTypes";

import styles from "./Movie.module.css";

interface Props {
  id: string;
}

const getReviewsElements = (reviews: Review[]) =>
  reviews.map((review) => <ReviewCard key={review.id} {...review} />);

export const Movie: FunctionComponent<Props> = ({ id }) => {
  const { data: movie } = useGetMovieByMovieIdQuery(id);
  const { data: reviews } = useGetReviewsByMovieIdQuery(id);

  return (
    <div className={styles.root}>
      {!!movie && <MovieCard {...movie} />}
      {!!reviews && getReviewsElements(reviews)}
    </div>
  );
};
