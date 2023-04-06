import Link from "next/link";
import Profile from "./components/Profile";
import Post from "./components/Post";

export default function Home() {
  return (
    <>
      <section>
        <Profile />
        <Post />
      </section>
    </>
  );
}
