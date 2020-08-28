import React, { useState } from "react"
import { blog } from "@layout/styles"
import PostPreview from "components/postPreview/index"
import usePosts from "hooks/usePosts"

const Blog = () => {
  const [tag, setTag] = useState("")
  const posts = usePosts(tag)

  return (
    <>
      <div>
        <nav>
          <ul className="button">
            <li>
              <button
                className={tag === "front" ? "active" : ""}
                onClick={() => setTag("front")}
              >
                <a className="button"> 👩‍💻 FRONT</a>
              </button>
            </li>
            <li>
              <button
                className={tag === "series" ? "active" : ""}
                onClick={() => setTag("series")}
              >
                <a className="button"> 📺 SERIES</a>
              </button>
            </li>
          </ul>
        </nav>
      </div>
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
