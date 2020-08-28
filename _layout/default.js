import React from "react"
import Header from "@includes/header"
import { styles } from "@layout/styles"

const DefaultLayout = (props) => {
  return (
    <main>
      <Header />
      {props.children}
      <style jsx global>
        {styles}
      </style>
    </main>
  )
}

export default React.memo(DefaultLayout)
