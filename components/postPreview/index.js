import React from "react"
import Link from "next/link"
import Styles from "./styles"
function postPreview({ post }) {
  return (
    <>
      <li className="articles">
        <Link href={"posts/" + post.slug}>
          <a className="articles">{post.title}</a>
        </Link>
        <span className="articles"> {post.date} 📅 </span>
      </li>
      <style jsx>{Styles}</style>
    </>
  )
}

export default React.memo(postPreview)
