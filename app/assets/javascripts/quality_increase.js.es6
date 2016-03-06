'use strict';

$(() => {
    upgradeQuality();
});

let qualities = ["Swill", "Plausible", "Genius"];

let upgradeQuality = () => {
    $('#ideas').delegate('#increase-quality', 'click', (event) => {
        //event.preventDefault();
        let $idea = $(event.toElement);
        let ideaID = $idea.attr('idea-id');
        let currentQuality = $idea.attr('quality-value');
        $.ajax({
            type: 'PATCH',
            url: "/api/v1/ideas/" + ideaID,
            data: { quality: increaseQuality(currentQuality) },
            success: () => { clearIdeas(); fetchIdeas(); },
            error: (xhr) => { alert(xhr.responseText); }
        });
    });
};

let increaseQuality = (currentQuality) => {
    let currentIndex = qualities.indexOf(currentQuality);
    if (currentIndex == 2) {
        alert("Cannot increase further!");
    } else {
        return qualities[currentIndex + 1];
    }
};
