import Blog from "components/Blog"
import DefaultLayout from "@layout/default"

export default function Home(props) {
  return (
    <DefaultLayout title={props.title} descripction={props.description}>
      <Blog />
    </DefaultLayout>
  )
}
