import React from "react"
import Link from "next/link"
import Styles from "./styles"

function postPreview({ post }) {
  return (
    <>
      <Link href={"posts/" + post.slug}>
        <li>
          <a>{post.title}</a>
          <span role="img" aria-label="calendar">
            📅 {post.date}
          </span>
        </li>
      </Link>
      <style jsx>{Styles}</style>
    </>
  )
}

export default React.memo(postPreview)
