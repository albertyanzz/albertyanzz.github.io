import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { IParams } from '../../lib/types';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as IParams;
  const postData = await getPostData(id);
  return {
    props: {
      postData,
    },
  };
};
export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

interface PostProps {
  postData: any;
}

export const Post: NextPage<PostProps> = ({ postData }) => {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </>
  );
};

export default Post;
