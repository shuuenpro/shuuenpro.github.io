function getLastUpdateTimestamp(id, filepath) {
    if (location.pathname.endsWith("/")) {
        filepath = location.pathname.substring(1) + "index.html";
    } else {
        filepath = location.pathname.endsWith(".html")
            ? location.pathname.substring(1)
            : location.pathname.substring(1) + ".html";
    }
    fetch(
        `https://api.github.com/repos/shuuenpro/shuuenpro.github.io/commits?path=${filepath}`
    )
        .then((res) => res.json())
        .then((res) => {
            date = new Date(res[0].commit.committer.date);
            formatDate = date.toLocaleString("sv-SE").split(" ")[0];
            formatTime = date.toLocaleTimeString();
            document.getElementById(id).innerHTML =
                formatDate + " @ " + formatTime;
        });
}

function getHits() {
    path =
        location.pathname == "/" ? "" : location.pathname.replace("/", "%2F");
    if (path != "%2Ftemplate" && path != "%2F404") {
        document.getElementById(
            "hits"
        ).src = `https://hitscounter.dev/api/hit?url=shuuenpro.github.io${path}&label=Page+Visits&color=%23d63384`;
        document.getElementById("unhide").classList.remove("d-none");
    }
}

function setFooter() {
    document.getElementById("footer").innerHTML = `
        <hr>
        <span id="unhide" class="d-none"><img id="hits" src=""> | </span><b>Page Last Updated: </b><span id="last-updated"></span>
        <hr>
    `;
}

setFooter();
if (location.hostname == "shuuenpro.github.io") {
    getLastUpdateTimestamp();
    getHits();
}
