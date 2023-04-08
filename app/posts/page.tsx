import FilterablePosts from "../components/FilterablePosts";
import { getPosts } from "../services/posts";

export default async function page() {
  const posts = await getPosts();
  // 포스트에있는 카테고리들을 가져오면 중복이 있으므로 중복을 Set으로 변환한 뒤
  //(왜냐면 Set은 중복이 안되니 고유한 카테고리만 모여있을 거임), 다시 배열로 변환
  const categories = [...new Set(posts.map((post) => post.category))];
  return <FilterablePosts posts={posts} categories={categories} />;
}
