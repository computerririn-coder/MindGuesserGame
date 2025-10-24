import styles from './ComponentC.module.css';

function ComponentC({ inputArray, setInputArray }) {

  function handleDelete(indexToDelete) {
    const newArray = inputArray.filter((_, index) => index !== indexToDelete);
    setInputArray(newArray);
  }

  return (
    <div className={styles.list}>
      <h1>List Of Previous Mind Readings</h1>
      {inputArray.map((item, index) => (
        <div
          key={index}
          className={styles.listItem}
          style={{ backgroundColor: item.isCorrect ? "green" : "red" }}
        >
          <span>{index + 1 + ":"}</span>
          <span>{item.value}</span>
          <button
            className={styles.deleteButton}
            onClick={() => handleDelete(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ComponentC;
