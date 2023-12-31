import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getPostsFiles() {
    return fs.readdirSync(postsDirectory)
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
}
export function getAllPosts() {
  const postFiles = getPostsFiles()
  const allPosts = postFiles.map((file) => {
    return getPostData(file);
  });
  const sortedPosts = allPosts.sort((a, b) => {
    const first = a.date.replace(/-/g, "");
    const second = b.date.replace(/-/g, "");
    return second - first
  });
  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
