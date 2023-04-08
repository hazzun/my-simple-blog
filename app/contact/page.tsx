"use client";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { useState } from "react";

const Links = [
  { icon: <AiFillGithub />, url: "https://github.com/hazzun" },
  {
    icon: <AiOutlineInstagram />,
    url: "https://www.instagram.com/_hazzun/",
  },
];

export default function page() {
  const [text, setText] = useState("hajoon0516@naver.com");

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert("복사 완료");
    } catch (err) {
      alert("복사 실패: ", err);
    }
  };
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-3xl font-bold my-2">Contact Me</h1>
      <div className="flex my-4">
        <p className="bg-yellow-50 rounded-lg py-1 px-4">
          hajoon0516@naver.com
        </p>
        <button
          onClick={handleClick}
          className="bg-yellow-100 rounded-lg py-1 px-4 text-sm hover:text-white hover:bg-black"
        >
          이메일 복사하기
        </button>
      </div>
      <div className="flex gap-2 my-2">
        {Links.map((a, index) => (
          <a
            key={index}
            href={a.url}
            target="_blank"
            className="text-4xl hover:text-red-400"
          >
            {a.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
