import { readFile } from "fs/promises";
import path from "path";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

// Post의 배열을 반환하는 Promise
export async function getPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8") //readFile을 promise에 있는걸로 가져옴
    .then<Post[]>((data) => JSON.parse(data)) //전달받는 것과 호출한 인자(data)가 동일하면 생략가능 -> .then(JSON.parse)처럼
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1))); //날짜별로 정렬되게끔
  // post안에 있는 타입을 a, b는 모름 (any 타입을 가짐) -> 따라서 위의 then에서 JSON으로 parse되는 타입이 Post타입임을 지정 ->비로소 a, b가 post라고 알게됨
}

// featured가 true인 것들만 뽑아가기
export async function getFeaturedPost(path: string): Promise<Post | undefined> {
  const posts = await getPosts();
  return posts.find((item) => item.path === path);
}
