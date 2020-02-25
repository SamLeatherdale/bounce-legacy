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
    getUrl().then(res => {
        const url = res.url;
        status.innerText = `Redirecting to ${url}`;
        setTimeout(() => {
            window.location = url;
        }, 2000);
    }).catch((e) => {
        status.innerText = `${e.message}`;
    })
}
bounce();