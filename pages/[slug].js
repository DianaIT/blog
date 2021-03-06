import PostLayout from "@layout/post"
import { getPostBySlug, getAllPosts } from "pages/api"

export default function Post(props) {
  return (
    <PostLayout
      title={props.title}
      content={props.content}
      slug={props.slug}
      date={props.date}
    />
  )
}

export async function getStaticProps(context) {
  return {
    props: await getPostBySlug(context.params.slug),
  }
}

export async function getStaticPaths() {
  let paths = await getAllPosts()
  paths = paths.map((post) => ({
    params: { slug: post.slug },
  }))
  return {
    paths: paths,
    fallback: false,
  }
}
