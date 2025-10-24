

import styles from './ComponentC.module.css';

function ComponentC({ inputArray }) {
  return (
    <div className={styles.list}>
      <p>sample</p>
      {inputArray.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default ComponentC;
