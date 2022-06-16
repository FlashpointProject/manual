let query = new URLSearchParams(location.search);
if (query.has('page')) {
    // Embed requested document
    let pageRequest = new XMLHttpRequest();
    pageRequest.open('GET', 'docs/' + query.get('page') + '.html');
    pageRequest.responseType = 'text';
    pageRequest.send();
    pageRequest.onload = function() {
        document.querySelector('.text').innerHTML = this.response;
        // Highlight link to requested document
        document.querySelector('.sidebar a[href="?page=' + query.get('page') + '"]').style.fontWeight = 'bold';
        // Change title of page
        let title = document.querySelector('.sidebar a[href="?page=' + query.get('page') + '"]').textContent;
        document.querySelector('title').textContent = title + ' - Flashpoint Help Manual';
    };
}
else
    window.location.replace('?page=Welcome');