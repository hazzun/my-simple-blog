import { getPost, getPosts } from "../services/posts";
import Image from "next/image";
// import imgList from "../../public/images/posts/best-react-practices.png";

export default async function Post() {
  const post = await getPosts();
  // console.log(post);

  return (
    <>
      <p className="ml-2 font-bold text-xl">Featured Posts</p>
      <section className="grid grid-cols-4">
        {post.map((data, index) =>
          data.featured === true ? (
            <div
              key={index}
              className="m-2 shadow-lg flex flex-col items-center"
            >
              <Image
                src={`/images/posts/${data.path}.png`}
                alt="image"
                width={100}
                height={100}
                className="w-full"
              />
              <div className="text-end">{data.date}</div>
              <div className="font-bold">{data.title}</div>
              <div>{data.description}</div>
              <div className="bg-green-300 opacity-60 px-2 py-1 rounded-lg my-4">
                {data.category}
              </div>
            </div>
          ) : null
        )}
      </section>
    </>
  );
}
