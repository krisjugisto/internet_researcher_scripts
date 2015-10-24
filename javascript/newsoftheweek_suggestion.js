articleHref = location.href;
if (document.getSelection) {
    articleDesc = document.getSelection();
} else {
    articleDesc = '';
};
articleTitle = document.title;
void(window.open('mailto:kristian.richter+pinboard@googlemail.com?subject=' + encodeURIComponent(articleTitle) + '&body=' + encodeURIComponent(articleHref) + encodeURIComponent('\n') + encodeURIComponent(articleDesc) + encodeURIComponent('\nt p selaestus todo')));
