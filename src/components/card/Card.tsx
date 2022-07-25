import React from 'react';
import styles from './Card.module.css';

const Card = () => {
  return (
    <div className={styles['card-container']}>
      <section className={styles['card-title']}>
        <h3>Titulo</h3>
      </section>

      <section className={styles['card-actions']}>
        <button>Add</button>
      </section>
    </div>
  );
};

export default Card;
