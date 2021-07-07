import React, { useRef } from 'react';
import './App.css';
import CKEditor4 from './Editors/CKEditor4';
import TinyMCE from './Editors/TinyMCE';
import CKEditor5 from './Editors/CKEditor5';
import Jodit from './Editors/Jodit';
import SunEditorComponent from './Editors/SunEditorComponent';
function App() {
  const data = `<table width="100%" border="0" cellpadding="0" cellspacing="0" style="width: 100%;text-align: left;">    <tbody><tr>      <td style="text-align: left;width: 76px;">        <!-- ngIf: recruiter.avatar --><img src="https://crowdstaffing-production-public.s3.us-west-2.amazonaws.com/592cd562-f6ca-4c36-9709-1874fae0e04e/100x100_100x100_100x100_100x100_Ravdeep-Sawhney-Montreal-avatar.png" class="user-avatar ng-scope" style="background-color: #bebebe;width: 66px;height: 66px;"><!-- end ngIf: recruiter.avatar -->        <!-- ngIf: !recruiter.avatar -->      </td>      <!-- ngIf: !recruiter.agency_user || recruiter.agency.company_name === 'Zynom' --><td class="ng-scope">        <div><b class="ng-binding">Ravdeep Sawhney</b></div>        <!-- ngIf: recruiter.primary_role != 'account manager' --><div class="ng-scope">Crowdstaffing - A Zenith Talent Company</div><!-- end ngIf: recruiter.primary_role != 'account manager' -->        <!-- ngIf: recruiter.primary_role == 'account manager' -->        <div class="ng-binding">          P:&nbsp;+1-514-831-2156 |          E:&nbsp;<!-- ngIf: recruiter.cs_email || recruiter.email || recruiter.emails --><a href="mailto:ravdeep@crowdstaffing.com" target="_blank" style="color: #02aeef;" class="ng-binding ng-scope">ravdeep@crowdstaffing.com</a><!-- end ngIf: recruiter.cs_email || recruiter.email || recruiter.emails --> |          W:&nbsp;<a href="http://www.crowdstaffing.com" target="_blank" style="color: #02aeef;">crowdstaffing.com</a>        </div>      </td><!-- end ngIf: !recruiter.agency_user || recruiter.agency.company_name === 'Zynom' -->      <!-- ngIf: recruiter.agency_user && recruiter.agency.company_name !== 'Zynom' -->    </tr>  </tbody></table>`;
  return (
    <div className="App">
      <header>
        <h1>Comparision of all Wysiwyg editors</h1>
      </header>
      <div className="editor-wrapper">
        <h3>CKEditor 4</h3>
        <CKEditor4 value={data} />
      </div>

      <div className="editor-wrapper">
        <h3>TinyMCE</h3>
        <TinyMCE value={data} />
      </div>
      <CKEditor5 value={data} />
      <div className="editor-wrapper">
        <h3>Jodit</h3>
        <Jodit value={data} />
      </div>
      <div>
        <h3>Sun Editor</h3>
        <SunEditorComponent value={data} />
      </div>
    </div>
  );
}

export default App;
