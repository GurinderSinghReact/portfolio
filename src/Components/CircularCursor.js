// CircularCursor.js
import React, { useState, useEffect } from 'react';
import './CircularCursor.css';

const CircularCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      const { clientX, clientY } = e;

      // Check if the cursor is still within the screen boundaries
      if (clientX >= 0 && clientX <= window.innerWidth && clientY >= 0 && clientY <= window.innerHeight) {
        setCursorPosition({ x: clientX, y: clientY });

        // Calculate the position of the dot relative to the outer circle
        const outerCircle = document.querySelector('.outer-circle');
        const outerCircleRect = outerCircle.getBoundingClientRect();

        const offsetX = clientX - outerCircleRect.left - outerCircleRect.width / 2;
        const offsetY = clientY - outerCircleRect.top - outerCircleRect.height / 2;

        setDotPosition({
          x: outerCircleRect.width / 2 + offsetX,
          y: outerCircleRect.height / 2 + offsetY,
        });
      }
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div className="circular-cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }}>
      <div className="outer-circle"></div>
      <div className="inner-dot" style={{ left: dotPosition.x, top: dotPosition.y }}></div>
    </div>
  );
};

export default CircularCursor;
