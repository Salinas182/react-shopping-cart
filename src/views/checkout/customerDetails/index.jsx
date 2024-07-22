import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import styles from './CustomerDetails.module.css';

export default function CustomerDetails() {
  return (
    <>
      <h3 className={styles.checkoutStage}>
        02. Titular del contrato
      </h3>

      <div className={styles.formContainer}>
        <form action="">
          <div className={styles.inputGroup}>
            <label for="id">Documento de identidad</label>
            <input
              type="text"
              id="id"
              name="id"
              placeholder="Ej. 01234567X"
            />
            <small className={styles.tooltip}>Sin guiones</small>
          </div>
          
          <div className={styles.inputGroup}>
            <label for="firstName">Nombre</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Ej. Daniel"
            />
          </div>

          <div className={styles.inputGroup}>
            <label for="firstLastName">Primer apellido</label>
            <input
              type="text"
              id="firstLastName"
              name="firstLastName"
              placeholder="Ej. Fernández"
            />
          </div>

          <div className={styles.inputGroup}>
            <label for="secondLastName">Segundo apellido</label>
            <input
              type="text"
              id="secondLastName"
              name="secondLastName"
              placeholder="Ej. García"
            />
          </div>

          <div className={styles.inputGroup}>
            <label for="birthdate">Fecha de nacimiento</label>
            <input
              type="text"
              id="birthdate"
              name="birthdate"
              placeholder="Ej. 01-02-1990"
            />
            <small className={styles.tooltip}>DD-MM-YYYY</small>
          </div>

          <div className={styles.inputGroup}>
            <label for="phone">Teléfono de contacto</label>
            <input
              type="number"
              id="phone"
              name="phone"
              placeholder="Ej. 612345678"
            />
            <small className={styles.tooltip}>Nos pondremos en contacto contigo en este teléfono</small>
          </div>

          <div className={styles.inputGroup}>
            <label for="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ej. carmenfernandez@gmail.com"
            />
            <small className={styles.tooltip}>Sin tildes</small>
          </div>
        </form>
      </div>

      <p className={styles.terms}>Al continuar, estás aceptando los <Link className={styles.termsLink} to="#">Términos y Condiciones en Protección de Datos</Link></p>

      <Button label={buttonProps.LABEL} styles={buttonProps.styles}/>
    </>
  );
}

const buttonProps = {
  LABEL: 'Continuar',
  styles: {
    buttonContainer: {
      display: 'flex',
      margin: '5vh 0',
      height: '7vh',
    },
    button: {
      width: '15vw',
      padding: '10px',
      backgroundColor: '#07128c',
      color: 'white',
      cursor: 'pointer',
    }
  }
};
