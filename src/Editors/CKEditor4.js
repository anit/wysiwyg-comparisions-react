import React, { useRef, useState } from 'react';
import CKEditor from 'ckeditor4-react';

class CKEditor4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { desc: props.value };
  }


  render() {
    return (
      <div>
        <CKEditor data={this.state.desc}       
          onBeforeLoad={ ( CKEDITOR ) => {
            CKEDITOR.config.allowedContent = true;
            CKEDITOR.config.extraAllowedContent = '*(*);*{*}';
            CKEDITOR.disableAutoInline = true ;
            CKEDITOR.config.fullPage = true;
            CKEDITOR.config.magicline_color = '#0000FF';
          }}
          config={{
            removePlugins: 'magicline, showborders', 
            disableAutoInline: true,
            fullPage: true,
            toolbar: [
              [ 'Styles', 'Format', 'Font', 'FontSize' ],
              [ 'Bold', 'Italic' ],
              [ 'Undo', 'Redo' ]
            ],
          }}
        />
      </div>
    );
  }
}

export default CKEditor4;
