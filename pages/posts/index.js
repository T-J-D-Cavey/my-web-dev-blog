import { getAllPosts } from "../../server/helpers/posts-utils";
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
