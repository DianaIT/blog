import Link from "next/link";
import DefaultLayout from "@layout/default";
import { blog } from "pages/styles";
import { getConfig, getAllPosts } from "pages/api";

export default function Home(props) {
  return (
    <>
      <DefaultLayout title={props.title} descripction={props.description}>
        <ul>
          {props.posts.map(function (post, idx) {
            return (
              <li key={idx}>
                📝{" "}
                <Link href={"posts/" + post.slug}>
                  <a>{post.title}</a>
                </Link>{" "}
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
  const allPosts = await getAllPosts();

  return {
    props: {
      posts: allPosts,
      title: config.title,
      description: config.description,
    },
  };
}

/*
<Link href="/blog">
              <a className="getStarted">BLOG</a>
            </Link>



              <DefaultLayout className="center">
        <main>
          <section>
            <Social></Social>
            <Avatar></Avatar>
          </section>
          <section>
            <h1>
              <Link href="/">
                <a> Diana Hernández </a>
              </Link>
            </h1>
            <h2>Desarrollo web</h2>
          </section>
        </main>
      </DefaultLayout>
*/
