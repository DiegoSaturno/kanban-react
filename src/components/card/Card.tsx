import React, { useState } from 'react';
import { AddTag } from 'components/add-tag';
import { Tag } from 'components/tag';


import styles from './Card.module.css';

const Card = () => {
  const [tags, setTags] = useState<string[]>([]);

  const addTag = (tag: string) => {
    setTags((prevTags) => [...prevTags, tag]);
  }

  return (
    <div className={styles['card-container']}>
      <div className={styles['card-text']}>
        Teste de card
      </div>
      <div className={styles['card-tags']}>
        {tags.map((tag, index) => (
          <Tag key={`${tag}-${index}`} text={tag} />
        ))}
        <AddTag onClick={addTag} />
      </div>
    </div>
  );
}

export default Card;
