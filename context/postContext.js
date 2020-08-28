import React, { useState } from "react"

const Context = React.createContext({})

export function postContext({ children }) {
  const [posts, setPosts] = useState()
  const [postsSeries, setPostsSeries] = useState()
  const [postsFront, setPostsFront] = useState()
  return (
    <Context.Provider
      value={{
        posts,
        setPosts,
        postsSeries,
        setPostsSeries,
        postsFront,
        setPostsFront,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
