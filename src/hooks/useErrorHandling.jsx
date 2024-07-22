import { useCallback, useState } from "react"

export default function useErrorHandling() {
  const [error, setError] = useState(null);
  const handleError = useCallback((err) => {
    setError(err);
  }, []);

  return { error, handleError };
}
