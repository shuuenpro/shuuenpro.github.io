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

function getHits() {
    var script = document.createElement("script");
    script.src = "https://gnrcounter.com/counter.php?accId=fe671b12dfaecd71ba8efb69a0f68cb6";
    document.getElementsByTagName("footer")[0].appendChild(script);
}