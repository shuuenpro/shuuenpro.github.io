function getLastUpdateTimestamp() {
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
            document.getElementById("last-updated").innerHTML =
                formatDate + " @ " + formatTime;
        });
}

function getHits() {
    path = location.pathname.endsWith("/")
        ? location.pathname.slice(0, -1)
        : location.pathname;
    if (path != "/template" && path != "/404") {
        fetch(
            `https://api.allorigins.win/get?url=${encodeURIComponent(
                `https://hitscounter.dev/api/hit?url=shuuenpro.github.io${path}&output=json`
            )}`
        )
            .then((res) => res.json())
            .then((res) => {
                obj = JSON.parse(res.contents);
                document.getElementById("visits").innerHTML = obj.total_hits;
            });
    }
}

function setFooter() {
    document.getElementById("footer").innerHTML = `
        <hr>
            <b>Total Page Visits: </b><span id="visits"></span><br>
            <b>Page Last Updated: </b><span id="last-updated"></span>
        <hr>
    `;
}

setFooter();
if (location.hostname == "shuuenpro.github.io") {
    getLastUpdateTimestamp();
    getHits();
}
