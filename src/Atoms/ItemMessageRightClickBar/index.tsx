import React from 'react';

interface ContextMenuProps {
  top: number;
  left: number;
  children: React.ReactNode;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({ top, left, children }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: `${top}px`,
        left: `${left}px`,
        background: 'white',
        border: '1px solid #ccc',
        zIndex: 1000,
      }}
    >
      {children}
    </div>
  );
};