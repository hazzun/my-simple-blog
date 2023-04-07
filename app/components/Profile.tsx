import Image from "next/image";
import myImg from "../../public/images/mymy.png";
import Link from "next/link";

export default function Profile() {
  return (
    <section className="flex flex-col items-center">
      <Image
        src={myImg}
        alt="myImage"
        className="rounded-full mx-auto"
        width={200}
        height={200}
        priority
      ></Image>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">{"안녕, 내 이름은 노하준"}</h1>
        <span className="text-lg font-semibold">Front-end Engineer</span>
        <span className="text-sm">중요한건 꺾였는데도 그냥 하는 마음</span>
        <button className="rounded-lg bg-yellow-300 px-4 mt-2">
          <Link href="/contact">contact me</Link>
        </button>
      </div>
    </section>
  );
}
