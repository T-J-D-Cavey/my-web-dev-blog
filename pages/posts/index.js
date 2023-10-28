import { getAllPosts } from '../../helpers/posts-utils';
import AllPosts from "../../components/posts/all-posts";

export default function AllPostsPage(props) {

    return (
        <AllPosts posts={props.posts} />
    )
}

export function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts: posts
    }
  }
}