import Profile from "./components/Profile";
import Post from "./components/Post";
import AllPost from "./components/AllPost";

export default function Home() {
  return (
    <>
      <section className="px-2">
        <Profile />
        {/* @ts-expect-error Server Component */}
        <Post />
        {/* @ts-expect-error Server Component */}
        <AllPost />
      </section>
    </>
  );
}
