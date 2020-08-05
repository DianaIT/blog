import styleAvatar from "./styleAvatar";
import Link from "next/link";

export default function Avatar() {
  return (
    <>
      <Link href="/about">
        <img src="../img/octocat.png" />
      </Link>
      <style jsx>{styleAvatar}</style>
    </>
  );
}
