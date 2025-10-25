import Link from "next/link";
import css from "./Header.module.css";
import { ALL_NOTES } from "@/lib/constants";

const Header = async () => {
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
            <Link href={`/notes/filter/${ALL_NOTES}`} className={css.link}>Notes</Link>
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
