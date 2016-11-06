/*

//The whole LinkedIn messaging stinks right now, haven't found out to insert strings
//properly. There is too much JS magic interferring so that string input register, but
//won't be shown. Some tinkering required.

if (window.location.href.indexOf("linkedin.com") > -1) {
  
  //document.querySelector(".mentions-highlighter").innerHTML = "Hallo"
  
  // Get name of current user, if not in Talent Manager
  currentUserName = document.querySelector(".act-set-name-split-link").innerHTML
  
  // This is based on the assumption, that the correct textarea is and always will be the second textarea on the site. Shockingly messy, I know. Sue me.
  if (!!window.location.href.indexOf("linkedin.com/messaging") && !!document.querySelector(".compose-area mentions-input")) {
    insertName(document.querySelector(".compose-area mentions-input"), currentUserName);
  }
  else if (!!window.location.href.indexOf("xing.com/messages") && !!document.getElementById("msg-text")) {
    insertName(document.getElementById("msg-text"), currentUserName);
  }
}
*/

if (window.location.href.indexOf("xing.com") > -1) {
  // Get name of current user, if not in Talent Manager
  currentUserName = document.querySelector(".myxing-profile-name").innerHTML
  
  // This is based on the assumption, that the correct textarea is and always will be the second textarea on the site. Shockingly messy, I know. Sue me.
  if (!!window.location.href.indexOf("xing.com/profile") && !!document.getElementsByTagName("textarea")[1]) {
    insertName(document.getElementsByTagName("textarea")[1], currentUserName);
  }
  else if (!!window.location.href.indexOf("xing.com/messages") && !!document.getElementById("msg-text")) {
    insertName(document.getElementById("msg-text"), currentUserName);
  }
}

function insertName(objTextArea, profileName) {
  objTextArea.innerHTML = objTextArea.innerHTML + "\n\n" + profileName;
}
