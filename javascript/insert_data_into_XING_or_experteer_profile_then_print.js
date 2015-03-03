addToInnerHTML =  '<ul>\
<li>Kaufmännisch/wettbewerbsorientiert: [___]</li>\
<li>Vertriebserfahrung: [___]</li>\
<li>Mobilität: [___]</li>\
<li>BizDev/Zukunftsorientierung: [___]</li>\
<li>Kommunalerfahrung: [___]</li>\
<li>Führungsverantwortung: [___]</li>\
<li>______________: [___]</li>\
<li>==============</li>\
<li>BEWERTUNG: [___]</li>\
</ul>'

if (window.location.href.indexOf("xing.com") > -1) {
  var oldInnerHTML = document.getElementsByClassName('grey')[0].innerHTML;
  document.getElementsByClassName('grey')[0].innerHTML = oldInnerHTML + addToInnerHTML;
  window.print();
} else if (window.location.href.indexOf("experteer.de") > -1) {
  var oldInnerHTML = document.getElementsByClassName('tab-content-notes')[0].innerHTML;
  document.getElementsByClassName('tab-content-notes')[0].innerHTML = oldInnerHTML + addToInnerHTML;
  window.print();
}