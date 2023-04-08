import Profile from "../components/Profile";

export default function page() {
  return (
    <>
      <Profile />
      <section className="text-center m-auto bg-gray-100 w-8/12 mt-20 shadow-lg py-10">
        <h1 className="text-3xl font-bold mt-4">나는 이런 사람이예요</h1>
        <p className="mb-6">front-end 개발자를 꿈꾸고 축구를 좋아하는 사람</p>
        <h1 className="text-3xl font-bold mt-4">커리어</h1>
        <p className="mb-6">
          한양대학교 ERICA 소프트웨어학부 컴퓨터전공 (2018.03 ~ 현재)
        </p>
        <h1 className="text-3xl font-bold mt-4">기술스택</h1>
        <p className="mb-6">
          JavaScript, React, NextJS
          <br /> Git, VS Code
        </p>
      </section>
    </>
  );
}
