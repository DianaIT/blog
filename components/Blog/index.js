import React from "react"
import DefaultLayout from "@layout/default"
import { blog } from "@layout/styles"
import PostPreview from "components/postPreview/index"
import { useRouter } from "next/router"

const Blog = ({ props, posts }) => {
  const router = useRouter()
  return (
    <>
      <DefaultLayout title={props.title} descripction={props.description}>
        <div>
          <nav>
            <ul className="button">
              <li>
                <button onClick={() => router.push("/front")}>
                  <a className="button"> 👩‍💻 FRONT</a>
                </button>
              </li>
              <li>
                <button onClick={() => router.push("/series")}>
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
      </DefaultLayout>
    </>
  )
}

export default React.memo(Blog)
