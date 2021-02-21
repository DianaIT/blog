import Portfolio from "../components/portfolio"
import DefaultLayout from "@layout/default"

export default function Home(props) {
  return (
    <DefaultLayout title={props.title} descripction={props.description}>
      <Portfolio />
    </DefaultLayout>
  )
}
