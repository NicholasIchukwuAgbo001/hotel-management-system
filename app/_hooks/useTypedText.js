import { useEffect, useState } from "react";

export default function useTypedText(messages = [], delay = 100) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);

  useEffect(() => {
    if (index === messages.length) return;

    if (subIndex < messages[index].length) {
      const timeout = setTimeout(() => {
        setText(messages[index].slice(0, subIndex + 1));
        setSubIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setSubIndex(0);
        setIndex((prev) => prev + 1);
      }, 2000); 
      return () => clearTimeout(timeout);
    }
  }, [subIndex, index, messages, delay]);

  return text;
}
