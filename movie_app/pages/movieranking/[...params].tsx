import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "next/image";

import Container from "react-bootstrap/Container";
interface MovieDetailProps {
  params: Array<string>;
  result: {
    poster_path: string;
    title: string;
    overview: string;
    release_date: string;
    production_companies: Array<CompanyProps>;
    production_countries: Array<CountryProps>;
  };
}

interface CompanyProps {
  logo_path: string;
  name: string;
}

interface CountryProps {
  name: string;
}

export default function MovieDetail({ params, result }: MovieDetailProps) {
  console.log(params, result);
  return (
    <Container style={{ display: "flex" }}>
      <Card
        style={{
          display: "flex",
          width: "40rem",
          margin: "auto",
        }}
      >
        <Card.Img
          variant="top"
          style={{ height: "40rem" }}
          src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
        />
      </Card>
      <Card
        style={{
          display: "flex",
          width: "40rem",
          height: "40rem",
          margin: "auto",
        }}
      >
        <Card.Body>
          <Card.Title>{result.title}</Card.Title>
          <Card.Text>Released : {result.release_date}</Card.Text>
          <Card.Text>
            {result.production_companies.map((obj, idx) => {
              return (
                <div key={idx} style={{ marginTop: 20 }}>
                  <Image
                    alt="studioLogo"
                    width={300}
                    height={100}
                    src={`https://image.tmdb.org/t/p/w500/${obj.logo_path}`}
                  />
                  <div>{obj.name}</div>
                </div>
              );
            })}
          </Card.Text>
          <Card.Text>
            <h1>overveiw</h1>
          </Card.Text>
          <Card.Text>{result.overview}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

interface ParamsProps {
  params: { params: Array<string> };
}

export async function getServerSideProps({ params }: ParamsProps) {
  const result = await (
    await fetch(`http://localhost:3000/api/movies/${params.params[1]}`)
  ).json();

  return {
    props: { params, result },
  };
}
