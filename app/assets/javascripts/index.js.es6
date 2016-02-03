$(() => {
    fetchIdeas()
})

var fetchIdeas = () => {
    $.getJSON("/api/v1/ideas", function(data) {
        chronoSortIdeas(data)
    })
}

var chronoSortIdeas = (data) => {
    data.sort((a, b) => {
        return b.id - a.id
    })
    .forEach((idea) => {
        renderIdea(idea)
    })
}

var renderIdea = (idea) => {
    $('#ideas').append(
        `<div id='idea'>`
        + `<h3 contenteditable='true' class='well idea-title' id='title' idea-id='${idea.id}' tile=${idea.title}>`
        + `${idea.title}`
        + `</h3><p contenteditable='true' class='well' id='body' idea-id=${idea.id} >`
        + `${truncate(idea.body)}`
        + `</p>`
        + `<p class='well'>`
        + `Quality: ${idea.quality}`
        + `</p>`
        + `<br>`
        + `<button type="button" class="btn btn-danger" id="delete-idea" idea-id=${idea.id}>Delete</button>`
        + `<hr>`
        + `</div>`
    )
}

var clearIdeas = () => {
    $('#ideas').children().remove();
}

var truncate = (string) => {
    if (string.length > 100) {
        return $.trim(string)
                .substring(0, 100)
                .split(" ")
                .slice(0, -1)
                .join(" ") + "...";
    } else {
        return string;
    }
}
