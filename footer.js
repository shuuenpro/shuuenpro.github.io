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

function getHits(id, path) {
    path = path.replace("/", "%2F");
    document.getElementById(id).src = `https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fshuuenpro.github.io%2F${path}&count_bg=%23FF31B3&title_bg=%23555555&icon_color=%23CB3887&title=Visits&edge_flat=false`
}