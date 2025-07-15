"use client"
import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ text, speed = 100, className = "", continuous = true }) => {
  // Support both string and array of strings
  const texts = Array.isArray(text) ? text : [text];
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0); // index within current string
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIdx, setTextIdx] = useState(0); // index of current string in texts

  useEffect(() => {
    const currentText = texts[textIdx];
    if (!isDeleting && currentIndex < currentText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + currentText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else if (!isDeleting && currentIndex >= currentText.length) {
      if (continuous) {
        const timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timer);
      }
    } else if (isDeleting && displayText.length > 0) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
      }, speed / 2);
      return () => clearTimeout(timer);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentIndex(0);
      setTextIdx((prev) => (prev + 1) % texts.length);
    }
  }, [currentIndex, texts, speed, isDeleting, displayText, continuous, textIdx]);

  useEffect(() => {
    // Reset displayText and currentIndex when textIdx changes
    setDisplayText('');
    setCurrentIndex(0);
  }, [textIdx]);

  return (
    <h1 className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </h1>
  );
};

export default TypewriterEffect; 