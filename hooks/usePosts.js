import { useState, useEffect } from "react"
import { getAllPosts, filterPosts } from "pages/api"

export default function usePosts(tag) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchData() {
      let response = posts
      let filteredPost = []
      if (posts !== []) {
        response = await getAllPosts()
        setPosts(response)
      }

      switch (tag) {
        case "front":
          filteredPost = filterPosts(response, tag)
          break
        case "series":
          filteredPost = filterPosts(response, tag)
          break
        default:
          filteredPost = response
      }

      setPosts(filteredPost)
    }
    fetchData()
  }, [tag])

  return posts
}
