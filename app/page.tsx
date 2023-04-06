import Profile from "./components/Profile";
import Post from "./components/Post";

export default function Home() {
  return (
    <>
      <section>
        <Profile />
        {/* @ts-expect-error Server Component */}
        <Post />
      </section>
    </>
  );
}
