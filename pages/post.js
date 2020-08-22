import DefaultLayout from "@layout/default"
import { post } from "@layout/styles"
import Share from "components/Share"
export default function PostLayout(props) {
  const handleOnClick = (evt) => {
    console.log(evt.targer.value)
  }
  return (
    <DefaultLayout>
      <article>
        <h1>{props.title}</h1>
        <section>
          <div>{props.date}</div>
        </section>
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
      </article>
      <Share
        icon="Twitter"
        text="Compartir"
        color="#5da8dc"
        onClick={handleOnClick}
      ></Share>
      <style jsx>{post}</style>
    </DefaultLayout>
  )
}
