let query = new URLSearchParams(location.search),
    pageID = query.has('page') ? query.get('page') : 'Welcome';
// Embed requested document
fetch(`text/${pageID}.html`).then(r => r.text()).then(html => {
    document.querySelector('.text').innerHTML = html;
    // Highlight link to requested document
    document.querySelector('.sidebar a[href="?page=' + pageID + '"]').style.fontWeight = 'bold';
    // Change title of page
    let title = document.querySelector('.sidebar a[href="?page=' + pageID + '"]').textContent;
    document.querySelector('title').textContent = title + ' - Flashpoint Help Manual';
});