import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);
  const sendRequest = useCallback((requestConfig, applyData) => {
    setIsLoading(true);
    try {
      const res = fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: JSON.stringify(requestConfig.body)
          ? JSON.stringify(requestConfig.body)
          : null,
      })
        .then((res) => res.json())
        .then((data) => {
          applyData(data);
        });
    } catch (error) {
      setErr(error);
    }
    setIsLoading(false);
  }, []);
  return { isLoading, err, sendRequest };
};

export default useHttp;
