import styleAvatar from "./styleAvatar";
import Link from "next/Link";

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
