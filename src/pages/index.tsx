import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>
          Read <Link href="/posts/first-post"><a>this page!</a></Link>
        </h1>
      </main>
      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          dislplay: flex;
          flexdirection: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default Home;