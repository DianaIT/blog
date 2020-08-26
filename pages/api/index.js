import matter from "gray-matter"
import marked from "marked"

export async function getAllPosts() {
  const context = require.context("../../_posts", false, /\.md$/)
  const posts = []
  for (const key of context.keys()) {
    const post = key.slice(2)
    const content = await import(`../../_posts/${post}`)
    const meta = matter(content.default)
    posts.push({
      id: meta.data.id,
      slug: post.replace(".md", ""),
      title: meta.data.title,
      date: meta.data.date,
      tag: meta.data.tag,
      image: meta.data.image,
      text: meta.data.text,
    })
  }

  /* Ordenar por id de mayor a menor
  https://es.stackoverflow.com/questions/61119/c%C3%B3mo-ordenar-arreglos-gui%C3%A1ndose-por-su-id-en-javascript
  */
  const array = posts.sort(function (a, b) {
    return b.id - a.id
  })
  return array
}

export async function getPostBySlug(slug) {
  const fileContent = await import(`../../_posts/${slug}.md`)
  const meta = matter(fileContent.default)
  const content = marked(meta.content)
  return {
    title: meta.data.title,
    content: content,
    date: meta.data.date,
    slug,
  }
}

export async function search(q) {
  const posts = await getAllPosts()
  const result = q
    ? posts.filter((post) => post.title.toLowerCase().includes(q))
    : []
  return result
}
