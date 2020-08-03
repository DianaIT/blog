import DefaultLayout from "@layout/default";
import Link from "next/Link";
import { post } from "../pages/styles";
export default function PostLayout(props) {
  return (
    <DefaultLayout>
      <article>
        <h1>{props.title}</h1>
        <section>
          <div>{props.date}</div>
        </section>
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
        <div>
          <Link href="/">
            <a>VOLVER</a>
          </Link>
        </div>
      </article>
      <style jsx>{post}</style>
    </DefaultLayout>
  );
}
