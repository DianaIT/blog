import Header from "@includes/header"
import { styles } from "@layout/styles"

export default function DefaultLayout(props) {
  return (
    <html lang="es">
      <main>
        <Header />
        {props.children}
        <style jsx global>
          {styles}
        </style>
      </main>
    </html>
  )
}
