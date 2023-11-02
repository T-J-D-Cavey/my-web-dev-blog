import Head from "next/head";
import { getPostData, getPostsFiles } from "@/client/helpers/posts-utils";
import PostContent from "../../components/posts/post-detail/post-content";

export default function PostDetailsPage(props) {
  return (
    <>
      <Head>
        <title>{`${props.post.title}`}</title>
        <meta
          name="description"
          content={`My blog post: ${props.post.title} - ${props.post.excerpt}`}
        />
      </Head>
      <PostContent post={props.post} />;
    </>
  );
}

export function getStaticProps(context) {
  const { slug } = context.params;
  const post = getPostData(slug);

  return {
    props: {
      post: post,
    },
    revalidate: 86400,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();
  const params = postFileNames
    .map((fileName) => fileName.replace(/\.md$/, ""))
    .map((slug) => ({ params: { slug: slug } }));

  return {
    paths: params,
    fallback: false,
  };
}
