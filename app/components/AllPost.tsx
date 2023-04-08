import { getPosts } from "../services/posts";
import CompCarousel from "./CompCarousel";
import PostCard from "./PostCard";

export default async function AllPost() {
  const allPosts = await getPosts();
  // console.log(allPosts[1].title);
  return (
    <section>
      <p className="font-bold text-xl mt-4">게시글 전체보기</p>
      <CompCarousel>
        {allPosts.map((x) => (
          <PostCard post={x} key={x.path} />
        ))}
      </CompCarousel>
    </section>
  );
}
