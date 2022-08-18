import Card from "react-bootstrap/Card";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Footer() {
  const router = useRouter();

  console.log(router.pathname);
  return (
    <Card
      className="bg-dark text-white"
      style={{
        position: router.pathname === "/" ? "absolute" : "relative",
        bottom: "0",
        width: "100rem",
        height: "4rem",
      }}
    >
      <Card.ImgOverlay>
        <Card.Title></Card.Title>
        <Card.Text>
          Movie Data Source :
          <Link href="https://www.themoviedb.org/">
            <a
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              themoviedb
            </a>
          </Link>
        </Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}
