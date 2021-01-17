import styleAvatar from "./styleAvatar"
import Link from "next/link"

export default function Avatar() {
  return (
    <>
      <Link href="/about">
        <img src="../img/dianait.jpg" />
      </Link>
      <style jsx>{styleAvatar}</style>
    </>
  )
}
