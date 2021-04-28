import { GetStaticPaths } from 'next';
import { Layout } from '../../components/layout';
import { getAllPostIds } from '../../lib/posts';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
};

const Post = () => {
  return <Layout>...</Layout>;
};

export default Post;