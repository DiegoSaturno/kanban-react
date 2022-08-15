import React from 'react';

import styles from './AddTag.module.css';

interface TagProps {
  onClick: (tag: string) => void;
}

const AddTag = ({ onClick }: TagProps) => {
  return (
    <div
      title='Add Tag'
      onClick={() => onClick('tag')}
      className={styles['add-tag-container']}
    >
      +
    </div>
  );
}

export default AddTag;
