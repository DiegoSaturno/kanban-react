import React from 'react';
import { Card } from '../card';

import styles from './Column.module.css';

const Column = () => {
  return (
    <div className={styles['column-container']}>
      <section className={styles['column-title']}>
        <h3>Titulo</h3>
      </section>
      <section className={styles['column-content']}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
      <section className={styles['column-actions']}>
        <button>Add</button>
      </section>
    </div>
  );
};

export default Column;
