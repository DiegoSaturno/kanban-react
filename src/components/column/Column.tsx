import React from 'react';
import { Card } from 'components/card';

import styles from './Column.module.css';

const Column = () => {

  //TODO: Receive color as a prop. Inherit to children components in order to make it consistent between diffent columns.
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
