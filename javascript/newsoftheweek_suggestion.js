articleHref = location.href;
if (document.getSelection) {
    articleDesc = document.getSelection();
} else {
    articleDesc = '';
};
articleTitle = document.title;
newWindow = window.open('mailto:MAILADDRESS?subject=' + encodeURIComponent(articleTitle) + '&body=' + encodeURIComponent(articleHref) + encodeURIComponent('\n') + encodeURIComponent(articleDesc) + encodeURIComponent('\nt p selaestus todo'), '', 'width=450, height=150');
newWindow.document.body.innerHTML = '<h2 style="color:red" align="center">Seite gesendet</h2><p style="color:grey" align="center">Es sollte sich das Fenster des Standard-Mailprogramms geöffnet haben. Nun dort die Mail ohne weitere Änderung senden.</p>';
