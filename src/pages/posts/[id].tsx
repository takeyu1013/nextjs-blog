import { GetStaticPaths, GetStaticProps } from 'next';
import { Layout } from '../../components/layout';
import { getAllPostIds } from '../../lib/posts';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {

    }
  };
};

const Post = () => {
  return <Layout>...</Layout>;
};

export default Post;