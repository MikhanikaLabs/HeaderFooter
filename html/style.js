const Style = () => {
  return ` 
  <html
  xmlns:o='urn:schemas-microsoft-com:office:office'
  xmlns:w='urn:schemas-microsoft-com:office:word'
  xmlns='http://www.w3.org/TR/REC-html40'>
  <head><title></title>
  
  <!--[if gte mso 9]><xml>
   <w:WordDocument>
    <w:View>Print</w:View>
    <w:Zoom>90</w:Zoom>
  </w:WordDocument>
  </xml><![endif]-->
  
  <style>
  p.MsoFooter, li.MsoFooter, div.MsoFooter
  {
      margin:0in;
      margin-bottom:.0001pt;
      mso-pagination:widow-orphan;
      tab-stops:center 3.0in right 6.0in;
      font-size:12.0pt;
  }
  <style>
  
  <!-- /* Style Definitions */
  
  @page Section1
  {
      size:8.5in 11.0in;
      margin:1.0in 1.0in 1.0in 1.0in;
      mso-header-margin:.5in;
      mso-footer-margin:.5in;
      mso-title-page:yes;
      mso-header: h1;
      mso-footer: f1;
      mso-first-header: fh1;
      mso-first-footer: ff1;
      mso-paper-source:0;
  }
  
  
  div.Section1
  {
      page:Section1;
  }
  

  table#hrdftrtbl
  {
      margin:0in 0in 0in 900in;
      width:1px;
      height:1px;
      overflow:hidden;
  }
  -->
  left { text-align: left; }
  #right { text-align: right; }
  #center { text-align: center; }
  #justify { text-align: justify; }
  .content {
    width: 50%; 
    /*background: #fc0; */
  }
  p.MsoHeader, p.MsoFooter { border: none; display: block;}
  p.MsoHeader :first, p.MsoFooter :first { border: none; display: block;}
  
  </style></head>
  
  <body lang=EN-US style='tab-interval:.5in'>
  <div class=Section1>
  <br/>
  <table id='hrdftrtbl' border='0' cellspacing='0' cellpadding='0'>
    <tr>
  <td>
        <div style='mso-element:header' id=h1 >
          <p class=MsoHeader style='text-align:left'>DEFAULT HEADER</p>
        </div>
      </td>
      <td>
        <div style='mso-element:footer' id=f1>        
          <p class=MsoFooter style='text-align:right'>
          <span style=mso-tab-count:2'></span>
              Page <span style='mso-field-code: PAGE '><span style='mso-no-proof:yes'></span></span> of <span style='mso-field-code: NUMPAGES '></span>
          </p>
        </div>    
        <div style='mso-element:header' id=fh1>
        <p class=MsoHeader><span lang=EN-US style='mso-ansi-language:EN-US'>&nbsp;FIRST-HEADER-TITLE<o:p></o:p></span></p>
      </div>
      <div style='mso-element:footer' id=ff1>
        <p class=MsoFooter><span lang=EN-US style='mso-ansi-language:EN-US'>&nbsp;FIRST-FOOTER-TITLE<o:p></o:p></span></p>
      </div>

      </td>
      </tr>
      </table>
  `;
};

module.exports = Style;
