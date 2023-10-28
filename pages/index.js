import Hero from "@/components/homepage/hero";
import FeaturedPosts from "@/components/homepage/featured-posts";
import { getFeaturedPosts } from "@/helpers/posts-utils";

export default function HomePage(props) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 86400,
  };
}
