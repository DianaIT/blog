import DefaultLayout from "@layout/default"
import { post } from "@layout/styles"
import Button from "components/Button"
import useTweet from "hooks/useTweet"

export default function PostLayout(props) {
  const tweet = useTweet({ title: props.title, slug: props.slug })

  return (
    <DefaultLayout>
      <article>
        <h1>{props.title}</h1>
        <section
          style={{ marginTop: "-25px", float: "right", fontSize: ".9rem" }}
        >
          <strong>Dianait</strong> | <span>{props.date}</span>
        </section>

        <div dangerouslySetInnerHTML={{ __html: props.content }} />
      </article>
      <Button text="Compartir" url={tweet}></Button>
      <style jsx>{post}</style>
    </DefaultLayout>
  )
}
