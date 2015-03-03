var firm = prompt("Bitte Firma angeben");
firm = firm.replace(" ", "+");
//var searchString = "https://www.xing.com/search/members?utf8=%E2%9C%93&advanced_form=true&q[current_company]=" + firm + "&q[previous_company]=" + firm;
var searchString = "https://www.xing.com/search/members?advanced_form=&q[keywords]= + firm";
window.open(searchString);
void(0);
