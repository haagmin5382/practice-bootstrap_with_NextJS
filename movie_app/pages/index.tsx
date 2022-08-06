import type { NextPage } from "next";
import Image from "next/image";
import background from "/public/images/jeremy-yap-J39X2xX_8CQ-unsplash.jpg";
const Home: NextPage = () => {
  return (
    <>
      <main>
        <Image alt="filmImage" src={background} layout="fill" z-index="999" />
        <h1 className="position-absolute top-50 start-50 translate-middle text-white-50 ">
          My Movie App
        </h1>
      </main>
    </>
  );
};

export default Home;
