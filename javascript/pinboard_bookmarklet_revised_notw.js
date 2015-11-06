javascript: q = location.href;
if (document.getSelection) {
    d = document.getSelection();
} else {
    d = '';
};
p = document.title;
f = prompt('Category tag?');
void(open('https://pinboard.in/add?showtags=yes&url=' + encodeURIComponent(q) + '&tags=COMPANYDUMMY+todo+' + encodeURIComponent(f) + '&later=yes&description=' + encodeURIComponent(d) + '&title=' + encodeURIComponent(p), 'Pinboard', 'toolbar=no,scrollbars=yes,width=750,height=700'));
