import { Movie } from "@/pagesComponents/Movie/Movie";

interface Props {
  params: {
    id: string;
  };
}

export default function PageMovie({ params }: Props): JSX.Element {
  return <Movie id={params.id} />;
}
