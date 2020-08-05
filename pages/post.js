import DefaultLayout from "@layout/default";
import { post } from "@layout/styles";
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
  );
}

// Fuente => http://abarcarodriguez.com/365/show?e=26
function getReadingTime(elem) {
  var words, time, minutes, seconds;
  words = elem.textContent.split(" ").length;
  time = (60 * words) / 250;
  minutes = ~~(time / 60);
  seconds = Math.ceil(time - minutes * 60);
  console.log(minutes + ":" + seconds);
  return minutes + ":" + seconds;
}
