var insertData = localStorage.insData;
if (insertData === undefined) {
  var promptData = prompt('No profile criteria found for this site. Please enter data');
  localStorage.insData = promptData;
  insertData = promptData;
}

if (window.location.href.indexOf("xing.com/xtm") > -1) {
  var oldInnerHTML = document.getElementsByClassName('content cv-entry group ')[0].innerHTML;
  document.getElementsByClassName('content cv-entry group ')[0].innerHTML = insertData + "<br>" + oldInnerHTML;
}
else if (window.location.href.indexOf("xing.com") > -1) {
  var oldInnerHTML = document.getElementsByClassName('grey')[0].innerHTML;
  document.getElementsByClassName('grey')[0].innerHTML = oldInnerHTML + insertData;
} else if (window.location.href.indexOf("experteer.de") > -1) {
  var oldInnerHTML = document.getElementsByClassName('tab-content-notes')[0].innerHTML;
  document.getElementsByClassName('tab-content-notes')[0].innerHTML = oldInnerHTML + insertData;
}
else if (window.location.href.indexOf("linkedin.com/pub") > -1 || window.location.href.indexOf("linkedin.com/profile") > -1 ) {
  var oldInnerHTML = document.getElementsByClassName('profile-overview-content')[0].innerHTML;
  document.getElementsByClassName('profile-overview-content')[0].innerHTML = oldInnerHTML + insertData;
}
else if (window.location.href.indexOf("linkedin.com/recruiter") > -1) {
  var oldInnerHTML = document.getElementsByClassName('info-container')[0].innerHTML;
  document.getElementsByClassName('info-container')[0].innerHTML = oldInnerHTML + insertData;
}
window.print();
