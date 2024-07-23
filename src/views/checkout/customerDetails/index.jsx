import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import styles from './CustomerDetails.module.css';
import Input from '../../../components/Input';
import useFormValidation from '../../../hooks/useFormValidation';
import { useEffect, useState } from 'react';

export default function CustomerDetails({nextStage}) {
  const [formCompleted, setFormCompleted] = useState(false);
  const initialValues = {
    id: '',
    firstName: '',
    firstLastName: '',
    secondLastName: '',
    birthdate: '',
    phone: '',
    email: ''
  };
  const {
    formValues,
    handleInputChange,
    validateForm
  } = useFormValidation(initialValues);

  useEffect(() => {
    const { valid } = validateForm();
    setFormCompleted(valid);
  }, [validateForm])

  return (
    <>
      <h3 className={styles.checkoutStage}>
        02. Titular del contrato
      </h3>

      <div className={styles.formContainer}>
        <form action="">
          <Input
            fieldProps={{
              type: 'text',
              name: 'id',
              label: 'Documento de identidad',
              placeholder: 'Ej. 01234567X',
              tooltipLabel: 'Sin guiones',
              styles: styles,
              onChange: handleInputChange,
              value: formValues.id
            }}
          />
          
          <Input
            fieldProps={{
              type: 'text',
              name: 'firstName',
              label: 'Nombre',
              placeholder: 'Ej. Daniel',
              styles: styles,
              onChange: handleInputChange,
              value: formValues.firstName
            }}
          />

          <Input
            fieldProps={{
              type: 'text',
              name: 'firstLastName',
              label: 'Primer apellido',
              placeholder: 'Ej. Fernández',
              styles: styles,
              onChange: handleInputChange,
              value: formValues.firstLastName
            }}
          />

          <Input
            fieldProps={{
              type: 'text',
              name: 'secondLastName',
              label: 'Segundo apellido',
              placeholder: 'Ej. García',
              styles: styles,
              onChange: handleInputChange,
              value: formValues.secondLastName
            }}
          />

          <Input
            fieldProps={{
              type: 'text',
              name: 'birthdate',
              label: 'Fecha de nacimiento',
              placeholder: 'Ej. 01-02-1990',
              tooltipLabel: 'DD-MM-YYYY',
              styles: styles,
              onChange: handleInputChange,
              value: formValues.birthdate
            }}
          />

          <Input
            fieldProps={{
              type: 'number',
              name: 'phone',
              label: 'Teléfono de contacto',
              placeholder: 'Ej. 612345678',
              styles: styles,
              tooltipLabel: 'Nos pondremos en contacto contigo en este teléfono',
              onChange: handleInputChange,
              value: formValues.phone
            }}
          />

          <Input
            fieldProps={{
              type: 'email',
              name: 'email',
              label: 'Correo electrónico',
              placeholder: 'Ej. carmenfernandez@gmail.com',
              styles: styles,
              tooltipLabel: 'Sin tildes',
              onChange: handleInputChange,
              value: formValues.email
            }}
          />
        </form>
      </div>

      <p className={styles.terms}>Al continuar, estás aceptando los <Link className={styles.termsLink} to="#">Términos y Condiciones en Protección de Datos</Link></p>

      <Button
        label={buttonProps.LABEL}
        styles={buttonProps.styles}
        disabled={!formCompleted}
        onClick={nextStage}
      />
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
