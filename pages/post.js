import DefaultLayout from "@layout/default"
import { post } from "@layout/styles"
export default function PostLayout(props) {
  return (
    <DefaultLayout>
      <article>
        <h1>{props.title}</h1>
        <section>
          <div>{props.date}</div>
        </section>
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
      </article>
      <style jsx>{post}</style>
    </DefaultLayout>
  )
}
