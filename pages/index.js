import Hero from "@/components/homepage/hero";
import FeaturedPosts from "@/components/homepage/featured-posts";
import NewsletterSignup from "@/components/newsletter/newsletter-signup";
import { getFeaturedPosts } from "@/client/helpers/posts-utils";

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

// OPTIONAL FEATURE: SIGN UP TO NEWSLETTER FORM INBETWEEN HERO AND FEATURED POST WHERE USER SUBMITS EMAIL ADDRESS 
// TO GET AN EMAIL WHENEVER A NEW BLOG IS POSTED
