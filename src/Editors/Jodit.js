import React, { useState, useRef } from 'react';
import Jodit from 'jodit-react';

const JoditEditor = ({ value }) => {
  const editor = useRef(null);
  const [content, setContent] = useState(value);

  const config = {
    readonly: false,
  };

  return (
    <Jodit
      ref={editor}
      value={value}
      config={config}
      tabIndex={1} // tabIndex of textarea
    />
  );
};

export default JoditEditor;
