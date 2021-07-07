import React, { useRef } from 'react';
import { CKEditor } from 'ckeditor4-react';

function CKEditor4(props) {
  return (
    <CKEditor initData={props.value} />
  );
}

export default CKEditor4;
