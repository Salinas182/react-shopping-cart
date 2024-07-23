import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logo from '../../assets/logo/finetwork_ng.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.customerServiceContainer}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        
        <div className={styles.customerServiceInfo}>
          <span className={styles.customerService}>
            Atención al cliente
          </span>
          <span className={styles.customerServiceSchedule}>
            De lunes a domingo desde las 9:00 hasta las 22:00
          </span>
        </div>

        <span className={styles.phoneCall}>Te llamamos +</span>
      </div>

      <hr className={styles.divider} />
      
      <div className={styles.bottomLinksContainer}>
        <Link to="#" className={styles.links}>
          Aviso legal
        </Link>
        <Link to="#" className={styles.links}>
          Política de cookies
        </Link>
        <Link to="#" className={styles.links}>
          Política de privacidad
        </Link>
        <Link to="#" className={styles.links}>
          Términos y condiciones
        </Link>
        <span>
          Finetwork - All Rights Reserved. - 2020 || Servicios prestados por Vodafone Enabler España S.L.
        </span>
      </div>
    </footer>
  );
}
