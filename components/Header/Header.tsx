import Link from "next/link";
import css from "./Header.module.css";
import { getCategories } from "@/lib/api";
import { ALL_NOTES } from "@/lib/constants";

const Header = async () => {
  const categories = await getCategories();
  return (
    <header>
      <nav>
        <ul className={css.list}>
          <li>
            <Link href="/" className={css.link}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={css.link}>
              About
            </Link>
          </li>
          <li>
            <ul>
              <li>
                <Link href={`/notes/filter/${ALL_NOTES}`}>All</Link>
              </li>
              {categories.map((item) => (
                <li key={item.id}>
                  <Link href={`/notes/filter/${item.id}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
            {/* <Link href="/notes" className={css.link}>Notes</Link> */}
          </li>
          <li>
            <Link href="/profile" className={css.link}>
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
