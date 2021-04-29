import { GetStaticPaths, GetStaticProps } from 'next';
import { Layout } from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = getPostData(params?.id as string);
  return {
    props: {
      postData
    }
  };
};

const Post = ({ postData }: {
  postData: {
    id: string,
    title: string,
    date: string,
    content: string
  }
}) => {
  return <Layout>
    {postData.title}
    <br />
    {postData.id}
    <br />
    {postData.date}
  </Layout>;
};

export default Post;