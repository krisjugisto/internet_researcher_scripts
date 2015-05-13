if (window.location.href.indexOf("linkedin.com") > -1) {
  var title = document.getElementsByClassName('title searchable')[0].innerHTML;
  
  title = replaceAll(title, '<span class="keyword">', '');
  title = replaceAll(title, '</span>', '');
  title = replaceAll(title, '&amp;', '');
  var place = document.getElementsByClassName('location-industry')[0].getElementsByTagName('a')[0].innerHTML;
  var google_search_string = 'https://www.google.de/?gws_rd=ssl#q=site:linkedin.com/pub '+ encodeURIComponent(title) + ' ' + place;
  google_search_string = replaceAll(google_search_string, ',', '');
  window.open(google_search_string)
  // Otherwise the source website will be changed to the default value of last operation.
  void(0);
}

function replaceAll(originalString, searchValue, newValue) {
  while (originalString.indexOf(searchValue) > -1) {
    originalString = originalString.replace(searchValue, newValue);
  }
  return originalString;
}
