import DefaultLayout from "@layout/default"
import { post } from "@layout/styles"
import Button from "components/Button"
import useTweet from "hooks/useTweet"

export default function PostLayout(props) {
  const tweet = useTweet({ title: props.title, slug: props.slug })
  const readingtime = getReadingTime(props.content)

  return (
    <DefaultLayout>
      <article>
        <h1>{props.title}</h1>
        <section
          style={{ marginTop: "-25px", float: "right", fontSize: "1.1rem" }}
        >
          <span>{props.date}</span> |
          <span>
            <strong>{readingtime} min read </strong>
          </span>
        </section>

        <div dangerouslySetInnerHTML={{ __html: props.content }} />
      </article>
      <Button text="Compartir" url={tweet}></Button>
      <style jsx>{post}</style>
    </DefaultLayout>
  )
}

// Source: http://abarcarodriguez.com/365/show?e=26
function getReadingTime(elem) {
  var words, time, minutes //, seconds
  words = elem.split(" ").length
  time = (60 * words) / 250
  minutes = ~~(time / 60)
  // seconds = Math.ceil(time - minutes * 60)
  // return minutes + ":" + seconds
  return minutes + 1
}
