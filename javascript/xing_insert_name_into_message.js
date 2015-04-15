/* This is some very rudimentary script to address a candidate on XING correctly.*/

if (window.location.href.indexOf("xing.com") > -1) {
  // This is based on the assumption, that the correct textarea is and always will be the second textarea on the site. Shockingly messy, I know. Sue me.
  if (!!window.location.href.indexOf("xing.com/profile") && !!document.getElementsByTagName("textarea")[1]) {
    insertName(document.getElementsByTagName("textarea")[1]);
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
    
  // Using genderize.io here, to determine the gender of the candidate. Just for Germans right now. I'm biased that way.
  // https://genderize.io has a rate limit of 1000 names/day, So make sure, none of the calls are wasted.
  var genderizeIO = httpGetRequest("https://api.genderize.io/?name=" + candidateFirstName + "&country_id=de");
    
  // Some basic error handling. Basically male is the default, that's bad.
  var objectResponse = JSON.parse(genderizeIO);
  if (objectResponse.hasOwnProperty('error')) {
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
