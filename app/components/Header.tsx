import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 items-center flex justify-between">
      <Link href="/">
        <h1 className="text-3xl font-bold">{"Hazzun's Blog"}</h1>
      </Link>
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">about</Link>
        <Link href="/posts">posts</Link>
        <Link href="/contact">contact</Link>
      </nav>
    </header>
  );
}
