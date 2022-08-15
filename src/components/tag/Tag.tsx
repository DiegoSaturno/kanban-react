import React from 'react';

import styles from './Tag.module.css';

interface TagProps { 
  text: string;
}

const Tag = ({ text }: TagProps) => {
  return (
    <div title={text} className={styles['tag-container']}>
      {text}
    </div>
  );
}

export default Tag;
