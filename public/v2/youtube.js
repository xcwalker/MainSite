const apiKey = "AIzaSyB22qHbSNFaHThdsieMdrVARfLRbnR_uGU" //CHANGE ME!!!
const backlogPlaylistID = "PLzpuhxZ8JpIbCTdb5Jn7NB0_LyyQ4cN1S"

const backlogTemplate = document.querySelector("[data-backlog-template]");
const backlogContainer = document.querySelector("[data-backlog-container]");

function onLoadBacklogs() {
    gapi.client.setApiKey(apiKey); 
    gapi.client.load('youtube', 'v3', function () {

        var request = gapi.client.youtube.playlistItems.list({
            part: 'snippet',
            playlistId: backlogPlaylistID,
            maxResults: 50
        });

        request.execute(function (response) {
            if (response.items.length == null || response.items.length == 0) {
                const card = backlogTemplate.content.cloneNode(true).children[0];
                const title = card.querySelector("[data-backlog-title]");
                const image = card.querySelector("[data-backlog-image]");
                title.textContent = "No backlogs";
                date.textContent = "Sorry, come back soon";
                image.alt = title.textContent;
                image.src = "https://media.istockphoto.com/vectors/shrugmug-emoji-vector-id872831978?k=20&m=872831978&s=612x612&w=0&h=K_oWfARLQLn4H5m0Fh88Xv342wmwukkiMbZvnsnNiqU=";

                backlogContainer.append(card);
                console.error("API quota met")
            }


            for (var i = 0; i < response.items.length; i++) {
                const card = backlogTemplate.content.cloneNode(true).children[0];
                const title = card.querySelector("[data-backlog-title]");
                const image = card.querySelector("[data-backlog-image]");
                title.textContent = response.items[i].snippet.title;
                image.src = response.items[i].snippet.thumbnails.high.url;
                image.alt = title.textContent;
                card.href = "https://www.youtube.com/watch?" + response.items[i].snippet.resourceId.videoId;

                backlogContainer.append(card);
            }
        });
    });
}