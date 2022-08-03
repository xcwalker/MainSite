var appsElems

function showAppDraw() {
    var appDraw = document.getElementById('app-draw');
    if (appDraw.classList.contains('visible')) {
        appDraw.classList.remove('visible')
    } else if (!appDraw.classList.contains('visible')) {
        appDraw.classList.add('visible')
        console.error("App Draw Classlist Error")
    }
    return false;
}

const appTemplate = document.querySelector("[data-my-projects-template]");
const appContainer = document.querySelector("[data-my-projects-container]");

// const applicationTemplate = document.querySelector("[data-application-template]");
// const applicationContainer = document.querySelector("[data-application-container]");

const footerProjectsTemplate = document.querySelector("[data-footer-projects-template]");
const footerProjectsContainer = document.querySelector("[data-footer-projects-container]");

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
            const title = card.querySelector("[data-my-projects-title]");
            const subtitle = card.querySelector("[data-my-projects-subtitle]");
            const sizingHoverTitle = card.querySelector("[data-my-projects-link]");
            const icon = card.querySelector("[data-my-projects-icon]");
            title.textContent = app.title;
            subtitle.textContent = app.hoverTXT;
            icon.src = app.iconURL;
            icon.alt = app.title;
            card.href = app.URL;
            card.style.setProperty('--background-color', app.backgroundColor);
            card.style.setProperty('--text-color', app.foregroundColor);
            card.style.setProperty('--border-color', app.borderColor);
            sizingHoverTitle.textContent = app.URL;

            appContainer.append(card);

            document.querySelectorAll(".progress-bar").forEach(calculateProgressBar)


            // const card2 = applicationTemplate.content.cloneNode(true).children[0];
            // const title2 = card2.querySelector("[data-application-title]");
            // const hoverTitle2 = card2.querySelector("[data-application-tag]");
            // const url = card2.querySelector("[data-application-url]");
            // const icon2 = card2.querySelector("[data-application-icon]");
            // title2.textContent = app.title;
            // icon2.src = app.iconURL;
            // icon2.alt = app.title;
            // card2.href = app.URL;
            // url.textContent = app.URL;
            // hoverTitle2.textContent = app.hoverTXT;
            // card2.style.setProperty('--background-color', app.backgroundColor);
            // card2.style.setProperty('--foreground-color', app.foregroundColor);
            // card2.style.setProperty('--border-color', app.borderColor);

            // applicationContainer.append(card2)

            const card3 = footerProjectsTemplate.content.cloneNode(true).children[0];
            const card3Link = card3.querySelector("[data-footer-projects-link]");
            card3Link.textContent = app.title;
            card3Link.href = app.URL;

            if (app.title != "XCWalker") {
                footerProjectsContainer.append(card3)
            }

            if (app.title == "XCWalker") {
                document.title = app.title + " | " + app.hoverTXT + " | XCWalker";
                document.querySelector('meta[name="description"]').setAttribute("content", app.description);
            }

            return { app }
        });
    })