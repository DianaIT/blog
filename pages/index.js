import DefaultLayout from "@layout/default"
import MainProfile from "../components/MainProfile"

export default function Home(props) {
  return (
    <DefaultLayout title={props.title} descripction={props.description}>
      <MainProfile />
    </DefaultLayout>
  )
}
