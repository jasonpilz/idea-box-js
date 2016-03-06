'use strict';

$(() => {
    downgradeQuality();
});

let downgradeQuality = () => {
    $('#ideas').delegate('#decrease-quality', 'click', (event) => {
        let $idea = $(event.toElement);
        let ideaID = $idea.attr('idea-id');
        let currentQuality = $idea.attr('quality-value');
        $.ajax({
            type: 'PATCH',
            url: "/api/v1/ideas/" + ideaID,
            data: { quality: decreaseQuality(currentQuality) },
            success: () => { clearIdeas(); fetchIdeas(); },
            error: (xhr) => { alert(xhr.responseText); }
        });
    });
};

let decreaseQuality = (currentQuality) => {
    let currentIndex = qualities.indexOf(currentQuality);
    if (currentIndex === 0) {
        alert("Cannot decrease further!");
    } else {
        return qualities[currentIndex - 1];
    }
};
