import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
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
  const postData = await getPostData(params?.id as string);
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
    contentHTML: string
  }
}) => {
  return <Layout>
    <Head>
      <title>{postData.title}</title>
    </Head>
    {postData.title}
    <br />
    {postData.id}
    <br />
    {postData.date}
    <br />
    <div dangerouslySetInnerHTML={{ __html: postData.contentHTML}} />
  </Layout>;
};

export default Post;