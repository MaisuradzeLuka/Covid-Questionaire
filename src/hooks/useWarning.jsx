import React, { useState, useEffect } from "react";

const useWarning = (initialMessage) => {
  const [message, setMessage] = useState(initialMessage);

  useEffect(() => {
    let timer;
    if (message) {
      timer = setTimeout(() => {
        setMessage("");
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [message]);

  return { message, setMessage };
};

export default useWarning;
