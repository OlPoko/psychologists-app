import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          psychologists<span>.services</span>
        </Link>

        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
          <Link to="/psychologists" className={styles.link}>
            Psychologists
          </Link>
        </nav>

        <div className={styles.auth}>
          <Link to="/login" className={styles.loginButton}>
            Login
          </Link>
          <Link to="/register" className={styles.registrationButton}>
            Registration
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
