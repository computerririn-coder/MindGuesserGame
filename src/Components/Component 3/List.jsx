
import { useContext } from 'react';
import styles from './List.module.css';
import { inputArrayContext } from '../Component 1/ComponentA';


function List() {
const inputArray = useContext(inputArrayContext);

  return (<>
    <section className={styles.list}>
      <p className={styles.textTitle}>List Of Previous Mind Readings</p>
<ul className={styles.text}>
  {inputArray.map((element, index) => (
    <li key={index}>{element}</li>
  ))}
</ul>
    </section>
    </>
  );
}

export default List;


