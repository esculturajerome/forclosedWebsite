import Head from "next/head";
import Image from "next/image";
import HeroComponent from "../components/HeroComponent";
import NavBar from "../components/NavBar";
import ResultComponent from "../components/ResultComponent";
import SearchWidgets from "../components/SearchWidgets";
export default function Home({ userList }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      {/* <HeroComponent /> */}
      <main className="bg-[#f8f8f8] mb-32 pt-4">
        <div className="max-w-[1200px] mx-auto px-2 md:px-4">
          <SearchWidgets userList={userList} />
          <div className="flex flex-col gap-4 pt-8">
            <ResultComponent type={2} />
            <ResultComponent type={2} />
            <ResultComponent type={1} />
            <ResultComponent />
            <ResultComponent />
            <ResultComponent inactive={true} />
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/users");
  const userList = await res.json();

  return {
    props: { userList }, // will be passed to the page component as props
  };
}
