import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import logo from '../../assets/logo/finetwork_black.svg';

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.linkContainer}>
        <Link to="/" className={styles.link}>
          <img src={logo} alt="Home link" />
        </Link>
      </div>
      <div className={styles.phoneInfoContainer}>
        <span className={styles.phoneInfo}>Llámanos GRATIS al 1777 </span>
      </div>
    </nav>
  );
}
