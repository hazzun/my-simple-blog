import { getPosts } from "../services/posts";
import Image from "next/image";
import PostGrid from "./PostGrid";
// import imgList from "../../public/images/posts/best-react-practices.png";

export default async function Post() {
  const post = await getPosts();
  // console.log(post[1].path);
  return (
    <div>
      <p className="mb-2 font-bold text-xl">게시글 큐레이팅</p>
      <section>
        <PostGrid posts={post} />
      </section>
    </div>
  );
}
