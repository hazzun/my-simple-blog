"use client";
// 상태를 이용해 현재 선택된 카테고리에 맞는 포스트만 보여주기 위해, 즉 상태를 가지기 위해서 client co,ponent여야 함

import { useState } from "react";
import { Post } from "../services/posts";
import PostGrid from "./PostGrid";
import Categories from "./Categories";

type Props = {
  posts: Post[];
  categories: string[];
};
const ALL_POSTS = "All Posts";

export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);

  const handleSelected = () => {
    setSelected(selected);
  };

  return (
    <section>
      <PostGrid posts={filtered} />
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
    </section>
  );
}
