import { useEffect, useState } from 'react';
import styled from 'styled-components';

const CursorDot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 6px;
  height: 6px;
  background-color: var(--accent);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: transform 0.1s;
  opacity: 0.8;
`;

const CursorRing = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  border: 1px solid var(--accent);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: width 0.3s, height 0.3s, transform 0.1s;
  opacity: 0.5;
  
  &.expand {
    width: 50px;
    height: 50px;
    opacity: 0.2;
  }
`;

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clickedRecently, setClickedRecently] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    if ('ontouchstart' in window) return;
    
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseDown = () => {
      setClickedRecently(true);
      setTimeout(() => setClickedRecently(false), 200);
    };
    
    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || 
          e.target.tagName === 'BUTTON' ||
          e.target.closest('a') ||
          e.target.closest('button')) {
        setIsHovering(true);
      }
    };
    
    const handleMouseOut = () => {
      setIsHovering(false);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <div className="custom-cursor">
      <CursorDot style={{ left: `${position.x}px`, top: `${position.y}px` }} />
      <CursorRing 
        className={isHovering || clickedRecently ? 'expand' : ''}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
        }} 
      />
    </div>
  );
}

export default CustomCursor;