import React from 'react';
const CustomEditor = ({ value }) => {
  return (
    <div class="custom-editor" contentEditable={true}  dangerouslySetInnerHTML={{__html: value}} />
  );
};


export default CustomEditor;
