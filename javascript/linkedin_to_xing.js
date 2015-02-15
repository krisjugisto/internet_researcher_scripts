var name = window.getSelection()
name = name.replace(/ /g, '+')
var xing_search_string = 'https://www.xing.com/search/members?advanced_form=&q[keywords]="'+name + '"';
window.open(xing_search_string)
// Otherwise the source website will be changed to the default value of last operation.
void(0)

