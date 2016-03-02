'use strict';

$(() => {
    fetchIdeas();
});

let fetchIdeas = () => {
    $.getJSON("/api/v1/ideas", (data) => {
        chronoSortIdeas(data);
    });
};

let chronoSortIdeas = (data) => {
    data.sort((a, b) => { return b.id - a.id; })
    .forEach((idea) => { renderIdea(idea); });
};

let renderIdea = (idea) => {
    $('#ideas').append(
        `<div id='idea' idea-id='${idea.id}'>
         <h3 contenteditable='true' class='well idea-title' id='title' idea-id='${idea.id}'>
         ${idea.title}
         </h3><p contenteditable='true' class='well' id='body' idea-id='${idea.id}'>
         ${truncate(idea.body)}
         </p>
         <p class='well'>
         Quality: ${idea.quality}
         </p>
         <br>
         <button type="button" class="btn btn-success" id="increase-quality" idea-id=${idea.id} quality-value=${idea.quality}>Increase</button>
         <button type="button" class="btn btn-danger" id="delete-idea" idea-id=${idea.id}>Delete</button>
         <button type="button" class="btn btn-warning" id="decrease-quality" idea-id=${idea.id} quality-value=${idea.quality}>Decrease</button>
         <hr>
         </div>`
    );
};

let clearIdeas = () => {
    $('#ideas').children().remove();
};

let truncate = (string) => {
    if (string.length > 100) {
        return $.trim(string)
                .substring(0, 100)
                .split(" ")
                .slice(0, -1)
                .join(" ") + "...";
    } else {
        return string;
    }
};
