var name = window.getSelection();
name = name.replace(/ /g, "+");
var linkedin_search_string = 'https://www.linkedin.com/vsearch/f?type=all&keywords=' + name;
window.open(linkedin_search_string);
void(0);
