import type { NextPage } from "next";
import Image from "next/image";
import background from "/public/images/jeremy-yap-J39X2xX_8CQ-unsplash.jpg";
const Home: NextPage = () => {
  return (
    <>
      <main>
        <Image src={background} />
        <h1 className="position-absolute top-50 start-50 text-white-50">
          My Movie App
        </h1>
      </main>
    </>
  );
};

export default Home;
