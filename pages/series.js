import { getAllPosts } from "pages/api"
import { useState, useEffect } from "react"
import Blog from "components/Blog"

export default function Home(props) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await getAllPosts()
      const filteredPost = filterPosts(response, "series")
      setPosts(filteredPost)
    }
    fetchData()
  }, [])

  return <Blog props={props} posts={posts} />
}

function filterPosts(response, tag) {
  return response.filter((post) => post.tag === tag)
}
