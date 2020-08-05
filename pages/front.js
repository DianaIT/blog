import Link from "next/Link";
import DefaultLayout from "@layout/default";
import { blog } from "pages/styles";
import { getPostsByTag } from "pages/api";
import Button from "components/button/index";

export default function Front(props) {
  return (
    <>
      <DefaultLayout title={props.title} descripction={props.description}>
        <Button />
        <ul>
          {props.posts.map(function (post, idx) {
            return (
              <li key={idx}>
                <Link href={"posts/" + post.slug}>
                  <a>{post.title}</a>
                </Link>
                <span> {post.date} 📅 </span>
              </li>
            );
          })}
        </ul>
        <style jsx>{blog}</style>
      </DefaultLayout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = await getPostsByTag("front");

  return {
    props: {
      posts: allPosts,
    },
  };
}
