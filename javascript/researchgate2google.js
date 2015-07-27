if (window.location.href.indexOf("researchgate.net/profile") > -1) {
  runResearchGate2Google();
}

function runResearchGate2Google(){
  var profileHeader = document.querySelector(".profile-header-name");
  var profileName = profileHeader.querySelector("a").getAttribute("content");
  var profileInstitution = profileHeader.querySelector(".institution.org").querySelector("meta").getAttribute("content");

  var searchString = replaceAll(profileName, " ", "+") + '+' + replaceAll(profileInstitution, " ", "+") + "+-researchgate.net";

  var google_search_string = '';
  googleSearchString = 'https://www.google.de/search?q=' + searchString;
  window.open(googleSearchString)
  void(0);
}

function replaceAll(originalString, searchValue, newValue) {
  while (originalString.indexOf(searchValue) > -1) {
    originalString = originalString.replace(searchValue, newValue);
  }
  return originalString;
}
