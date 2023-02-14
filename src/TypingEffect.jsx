import React, { useEffect, useState } from "react";

const TypingEffect = ({ text, speed, classname = "hello-text" }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId;

    const typeText = () => {
      if (currentIndex < text.length - 1) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        currentIndex++;
        timeoutId = setTimeout(typeText, speed);
      } else {
        clearTimeout(timeoutId);
      }
    };

    typeText();

    return () => clearTimeout(timeoutId);
  }, [text, speed]);

  return <p className={classname}>{displayText}</p>;
};

export default TypingEffect;
