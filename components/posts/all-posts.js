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
