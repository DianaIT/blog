import Link from "next/link";
import DefaultLayout from "@layout/default";
import { blog } from "@layout/styles";
import { getAllPosts } from "pages/api";
import Button from "components/button/index";

export default function Home(props) {
  return (
    <>
      <DefaultLayout title={props.title} descripction={props.description}>
        <div>
          <Button />
        </div>
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

export async function getStaticProps(Router) {
  const allPosts = await getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
