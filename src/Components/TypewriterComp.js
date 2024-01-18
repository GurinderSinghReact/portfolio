import { useEffect, useState } from "react";

const TypewriterComp = ({ text, onTypingEnd }) => {
  const [displayText, setDisplayText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText((prevText) => prevText + text.charAt(index));
      index++;

      if (index === text.length) {
        clearInterval(interval);
        setTypingComplete(true);

        // Invoke the callback if provided
        if (onTypingEnd) {
          onTypingEnd();
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, [text, onTypingEnd]);

  return <p style={styles.paraStyle}>{displayText}</p>;
};

const styles = {
  paraStyle: {
    fontSize: "1em",
  },
};

export default TypewriterComp;
