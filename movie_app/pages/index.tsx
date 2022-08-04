import type { NextPage } from "next";
import Image from "next/image";
import background from "/public/images/jeremy-yap-J39X2xX_8CQ-unsplash.jpg";
const Home: NextPage = () => {
  return (
    <>
      <main>
        <Image src={background} layout="fill" />
      </main>
    </>
  );
};

export default Home;
