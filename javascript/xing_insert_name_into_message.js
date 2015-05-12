/* This is some very rudimentary script to address a candidate on XING correctly.*/

if (window.location.href.indexOf("xing.com") > -1) {
  // This is based on the assumption, that the correct textarea is and always will be the second textarea on the site. Shockingly messy, I know. Sue me.
  if (!!window.location.href.indexOf("xing.com/profile") && !!document.getElementsByTagName("textarea")[1]) {
    insertName(document.getElementsByTagName("textarea")[1]);
  }
  else if (!!window.location.href.indexOf("xing.com/messages") && !!document.getElementById("msg-text")) {
    insertName(document.getElementById("msg-text"));
  }
}
  
function insertName(objTextArea) {
  // Get name from title. It's lazy, but it works.
  var candidateFullName = document.title;
  candidateFullName = candidateFullName.replace(' | XING', '');
  
  // Okay, this is not very clean and a lot of guess-work. It'll do for now.
  var candidateSplitName = candidateFullName.split(" ");
  var candidateFirstName = candidateSplitName[0];
  var candidateSurname = candidateSplitName[candidateSplitName.length -1];
  
  // Using Namesia now, not rate limits, if used moderately.
  var namesiaIO = httpGetRequest("https://api.namesia.de/names/de/" + candidateFirstName);
  
  // Some basic error handling. Basically male is the default, that's bad.
  var objectResponse = JSON.parse(namesiaIO);
  if (objectResponse.hasOwnProperty('Error')) {
    var candidateGender = 'male';
  }
  else {
    var candidateGender = objectResponse['gender'];
  }
  
  // This will address the candidate correctly, hopefully.
  var salutation = "";
  salutation = candidateGender === "female" ? "Sehr geehrte Frau " : "Sehr geehrter Herr ";
  objTextArea.innerHTML = salutation + candidateSurname + ",";
}

function httpGetRequest(getURL) {
  var requestHTTP = null;
  requestHTTP = new XMLHttpRequest();
  requestHTTP.open("GET", getURL, false)
  requestHTTP.send(null);
  return requestHTTP.responseText;
}
