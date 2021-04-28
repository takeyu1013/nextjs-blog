import Head from 'next/head';
import { Layout, siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts'

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
};

type Props = {
  allPostsData: Post[]
};

type Post = {
  id: string,
  date: string,
  title: string,
  content: string
};

const Home = ({ allPostsData }: Props) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Test</p>
        <p>
          (This is a sample website - you'll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map((post: Post) => (
            <li className={utilStyles.listItem} key={post.id}>
              {post.title}
              <br />
              {post.id}
              <br />
              {post.date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Home;