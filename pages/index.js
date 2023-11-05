import Hero from "@/components/homepage/hero";
import FeaturedPosts from "@/components/homepage/featured-posts";
import NewsletterSignup from "@/components/newsletter/newsletter-signup";
import { getFeaturedPosts } from "@/server/helpers/posts-utils";

export default function HomePage(props) {
  return (
    <>
      <Hero />
      <NewsletterSignup />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    }
  };
}

