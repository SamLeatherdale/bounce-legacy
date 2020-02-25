function getUrl() {
    return fetch('url.json')
        .then(res => {
            if (!res.ok) {
                throw new Error(`${res.status} ${res.statusText}`);
            }
            return res.json();
        })
}

function bounce() {
    const status = document.getElementById('status');
    const button = document.getElementById('go');
    getUrl().then(res => {
        const url = res.url;
        status.innerText = `Button redirects to ${url}`;
        button.onclick = () => {
            window.location = url;
        }
        
    }).catch((e) => {
        status.innerText = `${e.message}`;
    })
}
bounce();