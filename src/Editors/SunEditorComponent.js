import React from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

const SunEditorComponent = ({ value }) => {
  return <SunEditor defaultValue={value} />;
};
export default SunEditorComponent;
