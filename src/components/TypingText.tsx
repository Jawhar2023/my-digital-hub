import { useState, useEffect } from "react";

interface TypingTextProps {
  text: string;
  className?: string;
}

const TypingText = ({ text, className = "" }: TypingTextProps) => {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
        setDone(true);
        // Blink cursor twice then hide
        setTimeout(() => setShowCursor(false), 1600);
      }
    }, 120);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className={className}>
      {displayed}
      {showCursor && <span className="typing-cursor" />}
    </span>
  );
};

export default TypingText;
