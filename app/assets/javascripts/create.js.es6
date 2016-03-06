'use strict';

let $titleField, $bodyField;

$(() => {
    $titleField = $('#title-field');
    $bodyField = $('#body-field');

    bindEventsToNewIdeaForm();
});

let bindEventsToNewIdeaForm = () => {
    $('#save-idea').click( (event) => {
        event.preventDefault();
        let ideaParams = {
            title: $titleField.val(),
            body:  $bodyField.val()
        };

        $.post('/api/v1/ideas', ideaParams)
            .then(clearFields())
            .then(clearIdeas())
            .then(fetchIdeas())
            .fail(xhr => alert(xhr.responseText));
        });
};

let clearFields = () => {
    $titleField.val("");
    $bodyField.val("");
};
