import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';
import styles from './OrderSummary.module.css';
import chevronIcon from '../../../assets/icons/chevron.svg';

export default function OrderSummary({ product, discount = 0 }) {
  const [checkedTerms, setCheckedTerms] = useState(false);
  const [formCompleted, setFormCompleted] = useState(false);
  const navigate = useNavigate();

  const productMonthlyPrice = product.prices?.find(price => price.name === 'iva')?.price;
  const initialPayment = discount ? productMonthlyPrice : (productMonthlyPrice + 96.8).toFixed(1);

  useEffect(() => {
    setFormCompleted(checkedTerms);
  }, [checkedTerms]);

  const handleCheckboxChange = (e) => {
    setCheckedTerms(e.target.checked);
  };

  const handleButtonOnClick = () => {
    if (!formCompleted) {
      return;
    }
    navigate('/');
  }

  return (
    <>
      <h3 className={styles.checkoutStage}>
        03. Resumen de tu pedido
      </h3>

      <div className={styles.sectionContainer}>
        <h4 className={styles.sectionTitle}>Tu Tarifa</h4>

        <div className={styles.rateDetails}>
          <span>Fibra 300Mbps</span>
          <span className={styles.ratePrice}>
            {productMonthlyPrice} €
          </span>
        </div>

        <span className={styles.rateSubDescription}>
          10GB + Ilimitadas
        </span>

        <div className={styles.commitmentInfo}>
          <span>Permanencia</span>
          <span className={styles.commitmentPeriod}>
            {discount ? '3 meses' : 'No'}
          </span>
        </div>
      </div>

      <hr className={styles.divider}/>

      <div className={styles.sectionContainer}>
        <h4 className={styles.sectionTitle}>
          El primer mes pagarás
        </h4>

        <div className={styles.simInfo}>
          <span>Envío y Activación de SIM</span>
          <span className={styles.simPrice}>0.00€</span>
        </div>   
        
        <div className={styles.installationInfo}>
          <span>Instalación</span>
          <span className={styles.installationPrice}>96.80€</span>
        </div> 

        <div className={styles.installationDiscount}>
          <span>Descuento por Instalación</span>
          <span className={styles.discount}>
            {`-${discount}€`}
          </span>
        </div> 

        <p className={styles.initialPayment}>
          {`${initialPayment}€`}
        </p>
      </div>

      <hr className={styles.divider} />

      <div className={styles.sectionContainer}>
        <h4 className={styles.sectionTitle}>
          Todos los meses pagarás
        </h4>

        <div className={styles.monthlyPriceInfo}>
          <div className={styles.taxIncluded}>
            <span>TOTAL</span>
            <span>
              IVA incluido
              <img src={chevronIcon} alt="Chevron icon" className={styles.chevronIcon} />
            </span>
          </div>
          <span className={styles.monthlyPrice}>
            {`${productMonthlyPrice}€`}
          </span>
        </div> 
      </div>

      <hr className={styles.divider} />

      <div className={styles.completeProcess}>
        <div className={styles.acknowledgement}>
          <input
            type="checkbox"
            id="acknowledge"
            className={styles.checkbox}
            onChange={handleCheckboxChange}
            checked={checkedTerms}
          />
          <label htmlFor="acknowledge" className={styles.customCheckbox}></label>
          <p className={styles.acknowledgementText}>
            He leído y acepto los costes y las nuevas condiciones asociadas al cambio de tarifa, módulo de ahorro y/o promoción, así como la <Link to="#" className={styles.termsLink}>política de desestimiento</Link>, y solicito que los servicios comiencen a prestarse en el siguiente ciclo de facturación.
          </p>
        </div>

        <Button
          label={buttonProps.LABEL}
          styles={buttonProps.styles}
          disabled={!formCompleted}
          onClick={handleButtonOnClick}
        />
      </div>
    </>
  );
}

const buttonProps = {
  LABEL: 'Aceptar y confirmar tarifa',
  styles: {
    buttonContainer: {
      display: 'flex',
      height: '7vh',
    },
    button: {
      width: '15vw',
      padding: '10px',
      backgroundColor: '#6b34eb',
      color: 'white',
      cursor: 'pointer',
    }
  }
};
