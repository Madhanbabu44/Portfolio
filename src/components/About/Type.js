import React, { useState, useEffect } from 'react';

const Type = ({ textArray, speed, eraseSpeed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      if (isErasing) {
        if (charIndex > 0) {
          setDisplayedText(prev => prev.slice(0, -1));
          setCharIndex(prev => prev - 1);
        } else {
          setIsErasing(false);
          setIndex(prev => (prev + 1) % textArray.length);
        }
      } else {
        if (charIndex < textArray[index].length) {
          setDisplayedText(prev => prev + textArray[index][charIndex]);
          setCharIndex(prev => prev + 1);
        } else {
          setIsErasing(true);
          setCharIndex(textArray[index].length);
        }
      }
    };

    const typingInterval = setInterval(handleTyping, isErasing ? eraseSpeed : speed);

    return () => clearInterval(typingInterval);
  }, [charIndex, index, isErasing, textArray, speed, eraseSpeed]);

  return <span>{displayedText}</span>;
};

export default Type;
