import { useState } from 'react';
import Button from '../../../components/Button';
import styles from './DealDetails.module.css';
import checkedIcon from '../../../assets/icons/ok.svg';

const DISCOUNT_PROMO = 'STANDARD';

export default function DealDetails({ product, setDiscount, nextStage }) {
  const [promoSelected, setPromoSelected] = useState(null);
  const handlePromoSelection = (promo) => {
    setPromoSelected(promo);
    setDiscount(promo === DISCOUNT_PROMO ? 96.8 : 0);
  };

  return (
    <>
      <h3 className={styles.checkoutStage}>
        01. Configura tu tarifa
      </h3>
      <div className={styles.dealSummary}>
        <h2 className={styles.dealTitle}>{product.webInfo.menuTitle}</h2>
        <h1 className={styles.dealPrice}>
          {product.prices?.find(price => price.name === 'iva')?.price} €</h1>
      </div>

      <hr className={styles.detailsDivider} align="left"/>
      <p className={styles.description}>{product.webInfo.description}</p>

      <div className={styles.featuresContainer}>
        <ul className={styles.featuresList}>
          {product.webInfo.features?.map((feature, index) =>
            <li key={`feature-${index}`} className={styles.featureItem}>
              {feature}
            </li>
          )}
        </ul>
      </div>

      {product.promotions?.length && (
        <>
          <p className={styles.choice}>Elige la promoción que quieres aplicarle a tu tarifa:</p>
          <div className={styles.promosContainer}>
            {product.promotions.map((promo, idx) =>
              <div
                className={`${styles.promoCard} ${promoSelected === promo.type ? styles.selected : ''}`}
                key={`promo-${idx}`}
                onClick={() => handlePromoSelection(promo.type)}
              >
                {promoSelected === promo.type && (
                  <img src={checkedIcon} alt="Selected" className={styles.checkIcon} />
                )}
                {promo.type === 'ALTERNATIVE' && (
                  <p className={styles.bestSeller}>
                    LA MÁS VENDIDA
                  </p>
                )}
                <p className={styles.promoName}>{promo.name?.toUpperCase()}</p>
                <p>{promo.description}</p>
              </div>
            )}
          </div>
        </>
      )}

      <Button
        label={buttonProps.LABEL}
        styles={buttonProps.styles}
        disabled={!promoSelected}
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
  },
};

