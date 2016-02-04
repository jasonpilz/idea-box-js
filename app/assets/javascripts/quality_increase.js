'use strict'

$(() => {
    upgradeQuality();
})

var qualities = ["Swill", "Plausible", "Genius"];

var upgradeQuality = () => {
    $('#ideas').delegate('#increase-quality', 'click', (event) => {
        let $idea = $(event.toElement);
        let ideaID = $idea.attr('idea-id');
        let currentQuality = $idea.attr('quality-value');
        $.ajax({
            type: 'PATCH',
            url: "/api/v1/ideas/" + ideaID,
            data: { quality: newQuality(currentQuality) },
            success: () => { clearIdeas(); fetchIdeas() },
            error: (xhr) => { alert(xhr.responseText) }
        });
    });
};

var newQuality = (currentQuality) => {
    let currentIndex = qualities.indexOf(currentQuality);
    if (currentIndex == 2) {
        alert("Cannot increase further!")
    } else {
        return qualities[currentIndex + 1];
    }
}
