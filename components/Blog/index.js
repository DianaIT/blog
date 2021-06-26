import React from "react"
import { blog } from "@layout/styles"
import PostPreview from "components/postPreview/index"
import usePosts from "hooks/usePosts"

const Blog = () => {
  const posts = usePosts()

  return (
    <>
      <ul className="articles">
        {posts.map(function (post, idx) {
          return (
            <li key={idx}>
              <PostPreview post={post} />
            </li>
          )
        })}
      </ul>
      <style jsx>{blog}</style>
    </>
  )
}

export default React.memo(Blog)
