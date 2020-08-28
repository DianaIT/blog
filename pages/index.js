import { getAllPosts } from "pages/api"
import { useState, useEffect } from "react"
import Blog from "components/Blog"

export default function Home(props) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await getAllPosts()
      setPosts(response)
    }
    fetchData()
  }, [])

  return <Blog props={props} posts={posts} />
}
