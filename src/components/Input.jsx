export default function Input({ fieldProps }) {
  const {
    type = 'text',
    name,
    label,
    styles,
    placeholder = '',
    tooltipLabel = '',
    value = '',
    onChange
  } = fieldProps;
  
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {tooltipLabel && (
        <small className={styles?.tooltip}>{tooltipLabel}</small>
      )}
    </div>
  );
}
