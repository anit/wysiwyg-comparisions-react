import React, { useRef } from 'react';
import './App.css';
import CKEditor4 from './Editors/CKEditor4';
// import TinyMCE from './Editors/TinyMCE';
// import CKEditor5 from './Editors/CKEditor5';
// import Jodit from './Editors/Jodit';
// import SunEditorComponent from './Editors/SunEditorComponent';
import CustomEditor from './Editors/Custom';
function App() {

  const data = `<table width="100%" border="0" cellpadding="0" cellspacing="0" style="width: 100%;text-align: left;">    <tbody><tr>      <td style="text-align: left;width: 76px;">        <!-- ngIf: recruiter.avatar --><img src="https://crowdstaffing-production-public.s3.us-west-2.amazonaws.com/592cd562-f6ca-4c36-9709-1874fae0e04e/100x100_100x100_100x100_100x100_Ravdeep-Sawhney-Montreal-avatar.png" class="user-avatar ng-scope" style="background-color: #bebebe;width: 66px;height: 66px;"><!-- end ngIf: recruiter.avatar -->        <!-- ngIf: !recruiter.avatar -->      </td>      <!-- ngIf: !recruiter.agency_user || recruiter.agency.company_name === 'Zynom' --><td class="ng-scope">        <div><b class="ng-binding">Ravdeep Sawhney</b></div>        <!-- ngIf: recruiter.primary_role != 'account manager' --><div class="ng-scope">Crowdstaffing - A Zenith Talent Company</div><!-- end ngIf: recruiter.primary_role != 'account manager' -->        <!-- ngIf: recruiter.primary_role == 'account manager' -->        <div class="ng-binding">          P:&nbsp;+1-514-831-2156 |          E:&nbsp;<!-- ngIf: recruiter.cs_email || recruiter.email || recruiter.emails --><a href="mailto:ravdeep@crowdstaffing.com" target="_blank" style="color: #02aeef;" class="ng-binding ng-scope">ravdeep@crowdstaffing.com</a><!-- end ngIf: recruiter.cs_email || recruiter.email || recruiter.emails --> |          W:&nbsp;<a href="http://www.crowdstaffing.com" target="_blank" style="color: #02aeef;">crowdstaffing.com</a>        </div>      </td><!-- end ngIf: !recruiter.agency_user || recruiter.agency.company_name === 'Zynom' -->      <!-- ngIf: recruiter.agency_user && recruiter.agency.company_name !== 'Zynom' -->    </tr>  </tbody></table>`
  const simpleData =  '<p>This is a CKEditor 4 WYSIWYG editor instance created by ️⚛️ React.</p>';
  
  const complexData = `<div class="gmail_quote"><div dir="ltr" class="gmail_attr">---------- Forwarded message ---------<br>From: <strong class="gmail_sendername" dir="auto">Kiran Aware (Jira)</strong> <span dir="auto">&lt;jira@zenithtalent.atlassian.net&gt;</span><br>Date: Thu, Jul 8, 2021 at 3:15 PM<br>Subject: [JIRA] Kiran Aware mentioned you on RAM-1543<br>To: Anit Rai &lt;anit.rai@crowdstaffing.com&gt;<br></div><br><br><u></u>  
  
  <div style="font-size: 14px; line-height: 1.42857; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; color: rgb(23, 43, 77); letter-spacing: -0.15px;" bgcolor="#ffffff"> 
   <div style="display:none"> 
    <div> Kiran Aware <b>mentioned you</b> on an issue 
    </div> React App Migration/RAM-1543  In the pipeline activity section, the UI is not s per the angular app. scale points should not be there. &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌ 
   </div> 
   <div style="width:100.0%;table-layout:fixed;max-width:1040px;margin:0 auto">  
    <table style="border-spacing:0;margin:0;border-collapse:collapse;width:100.0%;border-spacing:0;margin:0"> 
     <tbody style="border-bottom:0">
      <tr> 
       <td style="padding:0;padding:0"> 
        <div style="margin-bottom: 7px;"> Kiran Aware <span style="font-weight:600">mentioned you</span> on an issue 
        </div> 
        <table style="width: 100%; border-spacing: 0px; max-width: 1040px; margin: 0px;"> 
         <tbody style="border-bottom:0">
          <tr> 
           <td style="padding:0;padding:0;padding-top:12px;padding-bottom:12px;border-top:2px solid #dfe1e6;border-bottom:2px solid #dfe1e6"> 
            <table style="border-spacing:0;margin:0;border-collapse:collapse;width:100.0%;border-spacing:0;margin:0;margin:0 0 0 0"> 
             <thead style="border-bottom:0"> 
              <tr> 
               <td colspan="3" style="padding:0;padding:0"> 
                <div> 
                 <div style="color: rgb(107, 119, 140); line-height: 20px; margin-bottom: 6px;"> 
                  <table style="border-spacing:0;margin:0;border-collapse:collapse;width:100.0%;border-spacing:0;margin:0;width:auto;border-spacing:0;height:20px" height="20"> 
                   <tbody style="border-bottom:0">
                    <tr> 
                     <td style="padding: 0px; white-space: nowrap;"> 
                      <table style="border-spacing:0;margin:0;border-collapse:collapse;width:100.0%;border-spacing:0;margin:0"> 
                       <tbody style="border-bottom:0"> 
                        <tr> 
                         <td style="padding: 0px;"> <a class="m_6162828784967037337ak-button__appearance-subtle-link" href="https://zenithtalent.atlassian.net/browse/RAM?atlOrigin=eyJpIjoiNTcyMGY4M2ExZDZkNGJkMjkzMmQ3YTE1MmJhZmJkYzUiLCJwIjoiaiJ9" style="box-sizing: border-box; border-radius: 3px; border-width: 0px; display: inline-flex; font-size: inherit; margin: 0px; outline: none; text-align: center; vertical-align: middle; background: none; text-decoration-line: none; padding: 0px; color: rgb(107, 119, 140); height: auto; line-height: normal;" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://zenithtalent.atlassian.net/browse/RAM?atlOrigin%3DeyJpIjoiNTcyMGY4M2ExZDZkNGJkMjkzMmQ3YTE1MmJhZmJkYzUiLCJwIjoiaiJ9&amp;source=gmail&amp;ust=1625826311155000&amp;usg=AFQjCNEiFn4rYtBzESchf4OQQpdkez9RNA">React App Migration</a> </td> 
                        </tr> 
                       </tbody> 
                      </table> </td> 
                     <td style="padding: 0px; white-space: nowrap;"> &nbsp;&nbsp;/&nbsp;&nbsp; </td> 
                     <td style="padding: 0px; white-space: nowrap;"> 
                      <table style="border-spacing:0;margin:0;border-collapse:collapse;width:100.0%;border-spacing:0;margin:0"> 
                       <tbody style="border-bottom:0"> 
                        <tr> 
                         <td style="padding: 0px;"> <img src="https://mail.google.com/mail/u/0/?ui=2&amp;ik=12b987035b&amp;attid=0.0.1&amp;permmsgid=msg-f%3A1704709351423452898&amp;th=17a8581f88e1a6e2&amp;view=fimg&amp;sz=s0-l75-ft&amp;attbid=ANGjdJ8mmBHe9c6cKz2QQg_IO95k_7Mi8gyn3KQBaFYaofqNR0KSITcgHoY77EEl0DxUnMDIWdl2WsH_WNgqKm280LkxvyurADuNz9dnv8yhHSs88ThWXb43iGKRaVk&amp;disp=emb" style="border:0;border:0;width:16px;height:16px;vertical-align:middle" width="16" height="16" data-image-whitelisted=""> </td> 
                         <td style="padding: 0px;">&nbsp;</td> 
                         <td style="padding: 0px;"> <a class="m_6162828784967037337ak-button__appearance-subtle-link" href="https://zenithtalent.atlassian.net/browse/RAM-1543?atlOrigin=eyJpIjoiNTcyMGY4M2ExZDZkNGJkMjkzMmQ3YTE1MmJhZmJkYzUiLCJwIjoiaiJ9" style="box-sizing: border-box; border-radius: 3px; border-width: 0px; display: inline-flex; font-size: inherit; margin: 0px; outline: none; text-align: center; vertical-align: middle; background: none; text-decoration-line: none; padding: 0px; color: rgb(107, 119, 140); height: auto; line-height: normal;" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://zenithtalent.atlassian.net/browse/RAM-1543?atlOrigin%3DeyJpIjoiNTcyMGY4M2ExZDZkNGJkMjkzMmQ3YTE1MmJhZmJkYzUiLCJwIjoiaiJ9&amp;source=gmail&amp;ust=1625826311155000&amp;usg=AFQjCNFsgOBBrL8AXhpb88a8AW3uTusJPg">RAM-1543</a> </td> 
                        </tr> 
                       </tbody> 
                      </table> </td> 
                    </tr> 
                   </tbody>
                  </table> 
                 </div> 
                </div> 
                <div class="m_6162828784967037337layout-simple-header-with-breadcrumbs" style="font-size: 20px; line-height: 24px; margin: 6px 0px 0px;"> <a href="https://zenithtalent.atlassian.net/browse/RAM-1543?atlOrigin=eyJpIjoiNTcyMGY4M2ExZDZkNGJkMjkzMmQ3YTE1MmJhZmJkYzUiLCJwIjoiaiJ9" style="text-decoration-line: none; color: rgb(0, 82, 204);" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://zenithtalent.atlassian.net/browse/RAM-1543?atlOrigin%3DeyJpIjoiNTcyMGY4M2ExZDZkNGJkMjkzMmQ3YTE1MmJhZmJkYzUiLCJwIjoiaiJ9&amp;source=gmail&amp;ust=1625826311155000&amp;usg=AFQjCNFsgOBBrL8AXhpb88a8AW3uTusJPg">  In the pipeline activity section, the UI is not s per the angular app. scale points should not be there. </a> 
                </div> </td> 
              </tr> 
             </thead> 
             <tbody style="border-bottom:0"> 
              <tr> 
               <td rowspan="2" style="padding:0;padding:0;padding-top:14px;vertical-align:top;width:40px" width="40"> <img src="https://ci3.googleusercontent.com/proxy/Od7V2dn_n5p7bV1nvFJrsW09nrsSC2JjMpd6WQ2zyMHjrTkMeCc6aw33xfaxdyUUALeJvxBGA8-eQLaKIxiFO_dLgC8D_pwImw9d99IgAIaad-sRolS3wH17_WqxwNyr3SuwKfTCJ1lOsltvXO_Uh8_I20-OMf7nGP2kWdeFvLz2oYcB49qIaSa0bywmfwHIXr96t2yH9EIsTT45DlJLT4FGEJ8TzCLC92xzs5E8mKBWzUbDz2tUKNF1bw=s0-d-e1-ft#https://secure.gravatar.com/avatar/25e4b9a33d26a22893d81d39eec30074?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKA-0.png" style="border:0;border:0;border-radius:50.0%;width:32px;height:32px" width="32" height="32"> </td> 
               <td colspan="2" style="padding:0;padding:0;padding-top:14px;padding-bottom:6px;line-height:20px;vertical-align:middle"> <span style="color: rgb(66, 82, 110); display: inline-block; vertical-align: middle;">Kiran Aware</span> <span style="color:#42526e;display:inline-block;vertical-align:middle"> 3:15&nbsp;PM&nbsp;IST</span> </td> 
              </tr> 
              <tr> 
               <td colspan="2" style="padding:0;padding:0;line-height:24px"> 
                <div>
                 <div style="line-height: 24px; vertical-align: baseline;">
                  <p style="margin: 0px 0px 7px; padding: 7px 0px 0px; line-height: 24px;">Sure <span style="background:#efeff2;border:1px solid transparent;border-radius:20px;color:#42526e;padding:0 4px 2px 3px;white-space:nowrap">@Anit Rai</span> </p>
                 </div>
                </div> </td> 
              </tr> 
             </tbody> 
             <tbody style="border-bottom:0"> 
              <tr> 
               <td colspan="3" height="12px" style="padding:0;padding:0"> &nbsp; </td> 
              </tr> 
              <tr> 
               <td colspan="3" style="padding:0;padding:0"> 
                <div style="margin:0 0 6px 0"> 
                 <table style="border-spacing:0;margin:0;border-collapse:collapse;width:100.0%;border-spacing:0;margin:0"> 
                  <tbody style="border-bottom:0"> 
                   <tr> 
                    <td style="padding:0;padding:0">  <a class="m_6162828784967037337ak-button__appearance-primary" href="https://zenithtalent.atlassian.net/browse/RAM-1543?atlOrigin=eyJpIjoiNTcyMGY4M2ExZDZkNGJkMjkzMmQ3YTE1MmJhZmJkYzUiLCJwIjoiaiJ9" style="box-sizing: border-box; border-radius: 3px; border-width: 0px; display: inline-flex; height: 2.28571em; line-height: 2.28571em; margin: 0px; outline: none; text-align: center; vertical-align: middle; white-space: nowrap; background: rgb(0, 82, 204); color: rgb(255, 255, 255); text-decoration-line: none; padding: 0px 38px;" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://zenithtalent.atlassian.net/browse/RAM-1543?atlOrigin%3DeyJpIjoiNTcyMGY4M2ExZDZkNGJkMjkzMmQ3YTE1MmJhZmJkYzUiLCJwIjoiaiJ9&amp;source=gmail&amp;ust=1625826311155000&amp;usg=AFQjCNFsgOBBrL8AXhpb88a8AW3uTusJPg">View issue</a>  </td> 
                   </tr> 
                  </tbody> 
                 </table> 
                </div> </td> 
              </tr> 
             </tbody> 
            </table> </td> 
          </tr> 
          <tr> 
           <td style="padding:0;padding:0;padding-top:12px"> 
            <table class="m_6162828784967037337footer" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing:0;margin:0;border-collapse:collapse;width:100.0%;border-spacing:0;margin:0"> 
             <tbody style="border-bottom:0">
              <tr> 
               <td style="padding:0;padding:0"> 
                <table style="border-spacing:0;margin:0;border-collapse:collapse;width:100.0%;border-spacing:0;margin:0"> 
                 <tbody style="border-bottom:0">
                  <tr> 
                   <td style="padding:0;padding:0"> <small style="color: rgb(112, 112, 112); font-size: 12px; line-height: 17px;">Get Jira notifications on your phone! Download the Jira Cloud app for <a href="https://play.google.com/store/apps/details?id=com.atlassian.android.jira.core&amp;referrer=utm_source%3DNotificationLink%26utm_medium%3DEmail" style="color: rgb(0, 82, 204); text-decoration-line: none;" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://play.google.com/store/apps/details?id%3Dcom.atlassian.android.jira.core%26referrer%3Dutm_source%253DNotificationLink%2526utm_medium%253DEmail&amp;source=gmail&amp;ust=1625826311155000&amp;usg=AFQjCNEASv4c1mPtVibx69saaZwrnQw-YA">Android</a> or <a href="https://itunes.apple.com/app/apple-store/id1006972087?pt=696495&amp;ct=EmailNotificationLink&amp;mt=8" style="color: rgb(0, 82, 204); text-decoration-line: none;" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://itunes.apple.com/app/apple-store/id1006972087?pt%3D696495%26ct%3DEmailNotificationLink%26mt%3D8&amp;source=gmail&amp;ust=1625826311155000&amp;usg=AFQjCNFr6B71xF0LXTBhP6MOccrRqlLJjQ">iOS</a>.</small> </td> 
                  </tr> 
                  <tr> 
                   <td style="padding:0;padding:0"> 
                    <div style="line-height:4px;height:4px;font-size:1px" height="4">
                      &nbsp; 
                    </div> </td> 
                  </tr> 
                  <tr> 
                   <td style="padding:0;padding:0;line-height:15px"> <small style="color: rgb(112, 112, 112); font-size: 12px; line-height: 17px;"> <a href="https://zenithtalent.atlassian.net/secure/ViewPersonalSettings.jspa#emailpreferences" style="color: rgb(0, 82, 204); text-decoration-line: none;" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://zenithtalent.atlassian.net/secure/ViewPersonalSettings.jspa%23emailpreferences&amp;source=gmail&amp;ust=1625826311155000&amp;usg=AFQjCNFQRXzZ4vfPJ_vMtupN-2NG-hbnoA">Manage notifications</a> </small> <small style="color: rgb(112, 112, 112); font-size: 12px; line-height: 17px;"> &nbsp;•&nbsp; </small> <small style="color: rgb(112, 112, 112); font-size: 12px; line-height: 17px;"> <a href="https://surveys.atlassian.com/jfe/form/SV_9X3zi1X4q1gKsqF" style="color: rgb(0, 82, 204); text-decoration-line: none;" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://surveys.atlassian.com/jfe/form/SV_9X3zi1X4q1gKsqF&amp;source=gmail&amp;ust=1625826311155000&amp;usg=AFQjCNGEmPS_2UZS9Me8jpRlFtTds3msXA">Give feedback</a> </small> <small style="color: rgb(112, 112, 112); font-size: 12px; line-height: 17px;"> &nbsp;•&nbsp; </small> <small style="color: rgb(112, 112, 112); font-size: 12px; line-height: 17px;"> <a href="https://www.atlassian.com/legal/privacy-policy" style="color: rgb(0, 82, 204); text-decoration-line: none;" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.atlassian.com/legal/privacy-policy&amp;source=gmail&amp;ust=1625826311155000&amp;usg=AFQjCNHOZ5gQRJAZMSO_nuKFWBLnh-2PFg">Privacy policy</a> </small> </td> 
                  </tr> 
                 </tbody>
                </table> </td> 
               <td width="20" class="m_6162828784967037337desktop-only" style="padding:0;padding:0;display:block"> &nbsp; </td> 
               <td style="padding:0;padding:0;text-align:right"> 
                <div class="m_6162828784967037337desktop-only"> 
                 <img src="https://mail.google.com/mail/u/0/?ui=2&amp;ik=12b987035b&amp;attid=0.0.2&amp;permmsgid=msg-f%3A1704709351423452898&amp;th=17a8581f88e1a6e2&amp;view=fimg&amp;sz=s0-l75-ft&amp;attbid=ANGjdJ8FxxECdjhIbN9ENUAAfCratxYSyv2Ua77AiGfv5Hj7zM-hcgf4Vw3j779AhsagShquakvbW8I-zUnJymcGgBLRcusBpfmNWBwsX6q5gj3coEqMBjmqEUjaTWk&amp;disp=emb" style="border:0;border:0;height:32px" height="32" data-image-whitelisted=""> 
                </div> </td> 
              </tr> 
              <tr> 
               <td style="padding:0;padding:0"> 
                <div class="m_6162828784967037337mobile-only" style="display:none;line-height:8px;height:8px" height="8">
                  &nbsp; 
                </div> </td> 
              </tr> 
              <tr> 
               <td style="padding:0;padding:0"> 
                <div class="m_6162828784967037337mobile-only" style="display:none"> 
                 <img src="https://mail.google.com/mail/u/0/?ui=2&amp;ik=12b987035b&amp;attid=0.0.2&amp;permmsgid=msg-f%3A1704709351423452898&amp;th=17a8581f88e1a6e2&amp;view=fimg&amp;sz=s0-l75-ft&amp;attbid=ANGjdJ_OAlImNtEVcObpyu03QGN4yRk4oCN3oMmdIYMouZ0A9-o2HtF7gwVMH7N1Vgpd3qhzwT4DoyikcjbQZQ3BabIXOyeEacsWoqLv1Ka4vDJNosAiug_EuE7pQmE&amp;disp=emb" style="border:0;border:0;height:32px" height="32" data-image-whitelisted=""> 
                </div> </td> 
              </tr> 
             </tbody>
            </table> </td> 
          </tr> 
         </tbody>
        </table> </td> 
      </tr> 
     </tbody>
    </table>  
   </div>  
  
 <img border="0" width="1" height="1" alt="" src="https://ci5.googleusercontent.com/proxy/gvhfM2Hh-h-4VwlT0Fu6bBBkliZb4xeUiHd5e-1TMzg0DKt3_c1lfif4q-PzBAR0bB_EipewlXqN-YRhqvKjm1-oKsP_z5sIlmqt_L8TTETOhziQ0phh_fPYy-DOrEWaUtzNbFqoRXsJBLLTELtqe3d0q_qZx71AzZgRBobbnm8kxnxqQQ8YEqhikg85pnqFhY5quZ0hmciO6MyIawKSV0ycXSMejT-b_OfPIlI9l9xVe_vp=s0-d-e1-ft#http://atlassian.et.e.sparkpost.com/q/qJUZ-BO4njF9sLssFhB66Q~~/AAAAAQA~/RgRiyU40PlcLYXRsYXNzaWFudXNCCmDdNMnmYPj1BxpSGmFuaXQucmFpQGNyb3dkc3RhZmZpbmcuY29tWAQAAAAE"></div></div>`


 const complexData2 = `\n\n\u003cdiv style=\"text-align: left;\"\u003e\n  \n    \u003ch1 style=\"background-color: #492e87; color: #fff; font-weight: normal; padding: 20px 35px; margin: 0px -35px 30px;\"\u003eRequest for an Event\u003c/h1\u003e\n    \u003cdiv style=\"text-align: left; padding: 0 35px;\"\u003e\n      \u003cp\u003eHi Ravdeep,\u003c/p\u003e\n      \u003cp style='text-align: left;'\u003e\n        You've been requested for Video Interview. Take a look and please confirm your availability at the earliest.\n      \u003c/p\u003e\n      \u003cdiv style=\"margin: 20px 0; text-align: center;\"\u003e\u003ca href='https://app.uat.crowdstaffing.com/#/calendar?open=116e1b80-c78f-4750-bcf5-c22d561df194' target=\"_blank\" style=\"display: inline-block; color: #fff; background-color: #492e87; border-radius: 6px; padding: 12px 24px; text-decoration: none;\"\u003eConfirm Availability\u003c/a\u003e\u003c/div\u003e\n    \u003c/div\u003e\n  \n  \u003cdiv style=\"text-align: left; padding: 0 35px;\"\u003e\n    \n      \u003chr style=\"border: 0; border-top: 1px solid #e1e2e3; margin: 30px 0 20px;\"\u003e\n      \u003cp\u003eThanks,\u003c/p\u003e\n      \u003ctable width=\"100%\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse: collapse; border-spacing: 0; margin: 30px 0 0; padding: 0; width: 100%; text-align: left;\"\u003e\n        \u003ctr\u003e\n          \u003ctd align=\"center\" valign=\"top\" style=\"border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; text-align: left;\"\u003e\n            \u003cimg src=\"https://marketing-image-production.s3.amazonaws.com/uploads/53bea6d27b3a1aaa3cfd28545be926daf68c8382bfe4a7d9f9c21498ed4aebd96d3417173c49a512155e22fd69766ac886d8e419796cb04e9c7d1d9895b50f41.jpg\" style=\"background-color: #BEBEBE; border-radius: 50%; display: inline-block; width: 66px; height: 66px; overflow: hidden\"\u003e\n          \u003c/td\u003e\n          \u003ctd align=\"center\" valign=\"top\" style=\"border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0 0 0 16px; text-align: left; font-size: 14px; line-height: 19px;\"\u003e\n            \u003cdiv style=\"margin-bottom: 4px;\"\u003e\u003cb\u003eCrowdstaffing Team\u003c/b\u003e\u003c/div\u003e\n            \u003cdiv\u003eCrowdstaffing\u003c/div\u003e\n            \u003cdiv\u003eP:\u0026nbsp;+1-844-467-2300 | E:\u0026nbsp;\u003ca href=\"mailto:support@crowdstaffing.com\" target=\"_blank\" style='color: black !important;text-decoration: none;'\u003esupport@crowdstaffing.com\u003c/a\u003e | W:\u0026nbsp;\u003ca href=\"https://www.crowdstaffing.com\" target=\"_blank\" style='color: black !important;text-decoration: none;'\u003eCrowdstaffing.com\u003c/a\u003e\u003c/div\u003e\n          \u003c/td\u003e\n        \u003c/tr\u003e\n      \u003c/table\u003e\n    \n  \u003c/div\u003e\n\u003c/div\u003e\n`;
  return (
    <div className="App">
      <header>
        <h1>Comparision of all Wysiwyg editors</h1>
      </header>
      <div className="editor-wrapper">
        <h3>CKEditor 4</h3>
        <CKEditor4 value={complexData2} />
      </div>

      <div className="editor-wrapper">
        <h3>CKEditor 5</h3>
        <CKEditor5 value={data} />
      </div>

      <div className="editor-wrapper">
        <h3>TinyMCE</h3>
        <TinyMCE value={data} />
      </div>

      <div className="editor-wrapper">
        <h3>Jodit</h3>
        <Jodit value={data} />
      </div>
      <div className="editor-wrapper">
        <h3>Sun Editor</h3>
        <SunEditorComponent value={data} />
      </div>
      <div className="editor-wrapper">
        <h3>Custom Editor</h3>
        <CustomEditor value={complexData2} />
      </div>
    </div>
  );
}

export default App;
