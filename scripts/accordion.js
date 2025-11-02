var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.7.1.min.js"; // Check https://jquery.com/ for the current version
document.getElementsByTagName("head")[0].appendChild(script);

$(document).ready(function () {
    switch (window.location.hash) {
        case "#voice-drama":
            $('button[data-bs-target="#react"]').removeClass("collapsed");
            $("#react").addClass("show");
            break;
        default:
            $(`button[data-bs-target="${window.location.hash}"]`).removeClass(
                "collapsed"
            );
            $(window.location.hash).addClass("show");
            break;
    }
});

var all_collapsed = true;

function toggleAll() {
    if (all_collapsed) {
        $(".accordion-button").removeClass("collapsed");
        $(".accordion-collapse").addClass("show");
    } else {
        $(".accordion-button").addClass("collapsed");
        $(".accordion-collapse").removeClass("show");
    }
    all_collapsed = !all_collapsed;
}
