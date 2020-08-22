import DefaultLayout from "@layout/default"
import { post } from "@layout/styles"
import Share from "components/Share"
import { useEffect, useState } from "react"

export default function PostLayout(props) {
  const [tweet, setTweet] = useState()

  useEffect(() => {
    const tweetInfo = {
      text: `${props.title} por @dianait_`,
      url: `https://dianait.vercel.app/posts/${props.slug}`,
    }
    const urlTweet = getUrlShareTwitter(tweetInfo)
    setTweet(urlTweet)
  }, [])

  return (
    <DefaultLayout>
      <article>
        <h1>{props.title}</h1>
        <section>
          <div>{props.date}</div>
        </section>
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
      </article>
      <Share text="Compartir" url={tweet}></Share>
      <style jsx>{post}</style>
    </DefaultLayout>
  )
}

function getUrlShareTwitter({ text, url }) {
  const BASE_URL = "https://twitter.com/intent/tweet"
  const content = `?text=${encodeURI(text)}`
  const link = `&url=${url}`
  console.log(BASE_URL + content + link)
  return BASE_URL + content + link
}
