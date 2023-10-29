import PostsGrid from "./posts-grid";
import classes from "./all-posts.module.css";

export default function AllPosts(props) {
  const { posts } = props;

  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts}/>
    </section>
  );
}

// OPTIONAL FEATURE: SIGN UP TO NEWSLETTER FORM H1 AND POST GRID WHERE USER SUBMITS EMAIL ADDRESS 
// TO GET AN EMAIL WHENEVER A NEW BLOG IS POSTED