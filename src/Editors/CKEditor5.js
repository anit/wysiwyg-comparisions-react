import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const CKEditor5 = ({ value }) => {
  return (
    <div className="editor-wrapper">
      <h3>CKEditor 5</h3>
      <CKEditor editor={ClassicEditor} data={value} />
    </div>
  );
};

export default CKEditor5;
