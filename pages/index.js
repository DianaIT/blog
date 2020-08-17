import DefaultLayout from "@layout/default"
import { blog } from "@layout/styles"
import { getAllPosts } from "pages/api"
import { useState, useEffect } from "react"
import PostPreview from "components/postPreview/index"

export default function Home(props) {
  const [tag, setTag] = useState()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await getAllPosts()
      let filterResponse = []

      switch (tag) {
        case "front":
          filterResponse = filterPosts(response, "front")
          break
        case "series":
          filterResponse = filterPosts(response, "series")
          break
        default:
          filterResponse = response
      }
      setPosts(filterResponse)
    }
    fetchData()
  }, [tag])

  return (
    <>
      <DefaultLayout title={props.title} descripction={props.description}>
        <div>
          <nav>
            <ul className="button">
              <li>
                <button
                  className={tag === "front" ? "active" : ""}
                  onClick={() => {
                    setTag("front")
                  }}
                >
                  <a className="button"> 👩‍💻 FRONT</a>
                </button>
              </li>
              <li>
                <button
                  className={tag === "series" ? "active" : ""}
                  onClick={() => {
                    setTag("series")
                  }}
                >
                  <a className="button"> 📺 SERIES</a>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <ul className="articles">
          {posts.map(function (post, idx) {
            return <PostPreview post={post} key={idx} />
          })}
        </ul>
        <style jsx>{blog}</style>
      </DefaultLayout>
    </>
  )
}

function filterPosts(response, tag) {
  return response.filter((post) => post.tag === tag)
}
