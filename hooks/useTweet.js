import { useState, useEffect } from "react"

export default function useTweet({ title, slug }) {
  const [tweet, setTweet] = useState()

  useEffect(() => {
    const tweetInfo = {
      text: ` 🌟 ${title} 🌟  por 🎯 @dianait_`,
      url: `https://dianait.vercel.app/${slug}`,
    }

    const urlTweet = getUrlShareTwitter(tweetInfo)
    setTweet(urlTweet)
  }, [title, slug])

  return tweet
}

function getUrlShareTwitter({ text, url }) {
  const BASE_URL = "https://twitter.com/intent/tweet"
  const content = `?text=${encodeURI(text)}`
  const link = `&url=${url}`
  return BASE_URL + content + link
}
