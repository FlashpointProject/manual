let query = new URLSearchParams(location.search),
    pageID = query.has('page') ? query.get('page') : 'Welcome';
// Embed requested document
let pageRequest = new XMLHttpRequest();
pageRequest.open('GET', 'text/' + pageID + '.html');
pageRequest.responseType = 'text';
pageRequest.send();
pageRequest.onload = function() {
    document.querySelector('.text').innerHTML = this.response;
    // Highlight link to requested document
    document.querySelector('.sidebar a[href="?page=' + pageID + '"]').style.fontWeight = 'bold';
    // Change title of page
    let title = document.querySelector('.sidebar a[href="?page=' + pageID + '"]').textContent;
    document.querySelector('title').textContent = title + ' - Flashpoint Help Manual';
};