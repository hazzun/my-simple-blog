import { Post } from "../services/posts";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: Post;
};

export default function PostGrid({ post }: Props) {
  // console.log(post.path);
  return (
    <Link
      href={`/posts/${post.path}`}
      key={post.path}
      className="shadow-md flex flex-col items-center hover:shadow-2xl"
    >
      <Image
        src={`/images/posts/${post.path}.png`}
        alt="image"
        width={100}
        height={100}
        className="w-full rounded-md overflow-hidden"
      />
      <time className="self-end text-gray-500">{post.date.toString()}</time>
      <div className="font-bold">{post.title}</div>
      <div className="w-full truncate text-center">{post.description}</div>
      <div className="bg-green-300 opacity-60 px-2 py-1 rounded-lg my-4 text-sm">
        {post.category}
      </div>
    </Link>
  );
}
