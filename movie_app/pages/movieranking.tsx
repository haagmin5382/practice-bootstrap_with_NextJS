import React from "react";
import { useRouter } from "next/router";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

interface resultsProps {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default function Movieranking({
  results,
}: {
  results: Array<resultsProps>;
}) {
  const router = useRouter();
  const enterIntoMovie = (title: string, id: number) => {
    router.push(`/movieranking/${title}/${id}`);
  };

  return (
    <div className="movieContainer">
      {results.map((movie, idx) => {
        return (
          <Card
            onClick={() => enterIntoMovie(movie.title, movie.id)}
            style={{ width: "18rem", margin: 10, cursor: "pointer" }}
            key={idx}
          >
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>{movie.original_title}</ListGroup.Item>
              <ListGroup.Item>{movie.release_date}</ListGroup.Item>
              <ListGroup.Item> ⭑ {movie.vote_average} </ListGroup.Item>
            </ListGroup>
          </Card>
        );
      })}
      <style jsx>{`
        .movieContainer {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();

  return {
    props: {
      results,
    },
  };
}
