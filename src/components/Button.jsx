export default function Button({ label, styles, onClick, disabled = false }) {

  const disabledStyles = {
    cursor: 'not-allowed',
    backgroundColor: 'grey',
  };

  return (
    <div style={styles.buttonContainer}>
      <button
        style={
          disabled
            ? { ...styles.button, ...disabledStyles }
            : styles.button
        }
        disabled={disabled}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
}
