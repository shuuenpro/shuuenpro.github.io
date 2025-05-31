document.getElementById("footer").innerHTML = `
    <hr>
    <b>Page Last Updated: </b><span id="last-updated"></span>
    <img class="d-none" id="hits" src="">
    <hr>
`

function getLastUpdateTimestamp(id, filepath) {
    fetch(
        `https://api.github.com/repos/shuuenpro/shuuenpro.github.io/commits?path=${filepath}`
    )
        .then((res) => res.json())
        .then((res) => {
            date = new Date(res[0].commit.committer.date);
            formatDate = date.toLocaleString("sv-SE").split(" ")[0];
            formatTime = date.toLocaleTimeString();
            document.getElementById(id).innerHTML = formatDate + " @ " + formatTime;
        });
}

function getHits(path) {
    path = path.replace("/", "%2F");
    document.getElementById("hits").src = `https://hitscounter.dev/api/hit?url=shuuenpro.github.io${path}&label=Page+Visits&color=%23d63384`;
    document.getElementById("hits").classList.remove("d-none");
}