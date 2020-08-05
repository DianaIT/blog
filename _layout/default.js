import Header from "@includes/header";
import { styles } from "pages/styles";

export default function DefaultLayout(props) {
  return (
    <main>
      <Header />
      {props.children}
      <style jsx global>
        {styles}
      </style>
    </main>
  );
}
