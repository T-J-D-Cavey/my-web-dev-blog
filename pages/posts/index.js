import { getAllPosts } from "../../client/helpers/posts-utils";
import AllPosts from "../../components/posts/all-posts";
import NewsletterSignup from "@/components/newsletter/newsletter-signup";
export default function AllPostsPage(props) {
  return (
    <>
      <NewsletterSignup />
      <AllPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts: posts,
    },
  };
}

// OPTIONAL FEATURE: SIGN UP TO NEWSLETTER FORM H1 AND POST GRID WHERE USER SUBMITS EMAIL ADDRESS
// TO GET AN EMAIL WHENEVER A NEW BLOG IS POSTED
