const genreEnRu: Record<string, string> = {
  fantasy: "Фэнтези",
  horror: "Ужасы",
  action: "Боевик",
  comedy: "Комедия",
};

export const localizeGenre = (genre: string | null) =>
  genre === null ? undefined : genreEnRu[genre];
