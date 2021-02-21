import styles from "./style"
import Link from "next/link"

export default function Menu() {
  const menu = [
    {
      id: 1,
      section: "home",
    },
    {
      id: 2,
      section: "portfolio",
    },
    {
      id: 3,
      section: "blog",
    },
  ]
  return (
    <ul className="snip1226">
      {menu.map(function ({ id, section }) {
        const path = section === "home" ? "" : section
        return (
          <li key={id}>
            <Link href={`/${path}`} key={id}>
              <a data-hover={section}>{section}</a>
            </Link>
          </li>
        )
      })}

      <style jsx>{styles}</style>
    </ul>
  )
}
