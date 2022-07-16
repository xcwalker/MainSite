var appsElems

function showAppDraw() {
    var appDraw = document.getElementById('app-draw');
    if (appDraw.classList.contains('visible')) {
        appDraw.classList.remove('visible')

        appsElems = document.querySelectorAll('.app').forEach(e => {
            e.tabIndex = -1;
        })
    } else if (!appDraw.classList.contains('visible')) {
        appDraw.classList.add('visible')

        appsElems = document.querySelectorAll('.app').forEach(e => {
            e.tabIndex = 0;
        })
    } else {
        console.error("App Draw Classlist Error")
    }
    return false;
}

const appTemplate = document.querySelector("[data-app-template]");
const appContainer = document.querySelector("[data-app-container]");

const applicationTemplate = document.querySelector("[data-application-template]");
const applicationContainer = document.querySelector("[data-application-container]");

fetch("https://raw.githubusercontent.com/XCWalker/Default/main/app-switcher.json")
    .then(res => res.json())
    .then(data => {
        sortedapps = data.sort(function (a, b) {
            if (a.title < b.title) { return -1; }
            if (a.title > b.title) { return 1; }
            return 0;
        });
        apps = sortedapps.map(app => {
            const card = appTemplate.content.cloneNode(true).children[0];
            const title = card.querySelector("[data-app-title]");
            const sizingTitle = card.querySelector("[data-app-title]");
            const hoverTitle = card.querySelector("[data-app-hover-title-sizing]");
            const sizingHoverTitle = card.querySelector("[data-app-hover-title-sizing]");
            const icon = card.querySelector("[data-app-icon]");
            title.textContent = app.title;
            sizingTitle.textContent = app.title;
            icon.src = app.iconURL;
            card.href = app.URL;
            hoverTitle.textContent = app.hoverTXT;
            sizingHoverTitle.textContent = app.hoverTXT;

            appContainer.append(card);

            
            const card2 = applicationTemplate.content.cloneNode(true).children[0];
            const title2 = card2.querySelector("[data-application-title]");
            const hoverTitle2 = card2.querySelector("[data-application-tag]");
            const url = card2.querySelector("[data-application-url]");
            const icon2 = card2.querySelector("[data-application-icon]");
            title2.textContent = app.title;
            icon2.src = app.iconURL;
            card2.href = app.URL;
            url.textContent = app.URL;
            hoverTitle2.textContent = app.hoverTXT;
            card2.style.setProperty('--background-color', app.backgroundColor);
            card2.style.setProperty('--foreground-color', app.foregroundColor);
            card2.style.setProperty('--border-color', app.borderColor);

            applicationContainer.append(card2)

            if (app.title == "XCWalker") {
                document.title = app.title + " | " + app.hoverTXT + " | XCWalker"
            }

            return { app }
        });
    })