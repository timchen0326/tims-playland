import React from 'react';
import Draggable from 'react-draggable';
import './shoutout.css'; // Ensure this path is correct

interface ShoutoutProps {
  component: string;
  importMethod: string;
  use: string;
}

export const Shoutout: React.FC<ShoutoutProps> = ({ component, importMethod, use }) => {
  return (
    <Draggable
      axis="x" // Allows dragging only horizontally
      bounds="parent" // Constrain dragging within the parent element
    >
      <div className="shoutoutStyles">
        <h4>How to use {component}</h4>
        <pre className="codeBlockStyles">
          {importMethod}
          {'\n'}
          {use}
        </pre>
      </div>
    </Draggable>
  );
};
