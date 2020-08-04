import Link from "next/link";
import DefaultLayout from "@layout/default";
import { blog } from "pages/styles";
import { getConfig, getPostsByTag } from "pages/api";
import Button from "components/button/index";

export default function Series(props) {
  console.log(props);
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
  const config = await getConfig();
  const allPosts = await getPostsByTag("series");

  return {
    props: {
      posts: allPosts,
      title: config.title,
      description: config.description,
    },
  };
}
