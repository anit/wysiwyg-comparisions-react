import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const CKEditor5 = ({ value }) => {
  return (
    <CKEditor editor={ClassicEditor} data={value} />
  );
};

export default CKEditor5;
