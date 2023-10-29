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
    }
  };
}

// OPTIONAL FEATURE: SIGN UP TO NEWSLETTER FORM INBETWEEN HERO AND FEATURED POST WHERE USER SUBMITS EMAIL ADDRESS 
// TO GET AN EMAIL WHENEVER A NEW BLOG IS POSTED
