import React from "react"
import Link from "next/link"
import Styles from "./styles"
function postPreview({ post }) {
  return (
    <>
      <Link href={"posts/" + post.slug}>
        <li>
          <section>
            <a>{post.title}</a>
            <date> 📅 {post.date} </date>
          </section>
        </li>
      </Link>
      <style jsx>{Styles}</style>
    </>
  )
}

export default React.memo(postPreview)
