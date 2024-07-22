export default function Button({label, styles}) {
  return (
    <div style={styles.buttonContainer}>
      <button style={styles.button}>{label}</button>
    </div>
  );
}