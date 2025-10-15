import Link from "next/link";
import css from './Header.module.css'

const Header = () => {
  return (
    <header>
      <nav>
        <ul className={css.list}>
          <li>
            <Link href="/" className={css.link}>Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/notes">Notes</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
