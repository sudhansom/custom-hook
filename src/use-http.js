import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);
  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    try {
      const res = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      // .then((res) => res.json())
      // .then((data) => {
      //   applyData(data);
      // });
      if (!res.ok) {
        throw new Error("Something went wrong...");
      }
      const data = await res.json();
      applyData(data);
    } catch (error) {
      setErr(error);
    }
    setIsLoading(false);
  }, []);
  return { isLoading, err, sendRequest };
};

export default useHttp;
