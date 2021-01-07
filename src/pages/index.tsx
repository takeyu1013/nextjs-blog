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
    </div>
  );
};

export default Home;