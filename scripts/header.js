function setHeader() {
    document.getElementById("header").innerHTML = `
        <nav class="navbar navbar-expand-md navbar-dark mb-2">
            <div class="container-fluid">
                <button class="navbar-toggler mb-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarMenu">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/">
                                <svg id="home" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                                    <path fill="white" d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                                </svg>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/guide">New Fan's Guide</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Masterlists
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="/albums">Albums / Songs</a></li>
                                <li><a class="dropdown-item" href="/novels">Light Novels</a></li>
                                <li><a class="dropdown-item" href="/manga">Manga</a></li>
                                <li><a class="dropdown-item" href="/videos">Crossfades & Song MVs</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/resources">Resources</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://discord.gg/Xrnqszbk8D">Fan Discord</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <hr>
    `;
}

function setActive() {
    if (location.host == "shuuenpro.github.io") {
        href = location.pathname.replace(".html", "");
    } else {
        href = "/" + location.href.split("/").slice(-1)[0].replace(".html", "");
        if (href == "/index") {
            href = "/";
        }
    }
    let match = document.querySelectorAll(`header a[href="${href}"`)[0];
    match.classList.add("active");
}

setHeader();
setActive();