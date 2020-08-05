import Link from "next/Link";
import { button } from "./style";

export default function Button() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/front">
              <a> 👩‍💻 FRONT</a>
            </Link>
          </li>
          <li>
            <Link href="/series">
              <a> 📺 SERIES</a>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{button}</style>
    </>
  );
}
