var $titleField, $bodyField;

$(() => {
    $titleField = $('#title-field');
    $bodyField = $('#body-field');

    bindEventsToNewIdeaForm()
})

var bindEventsToNewIdeaForm = () => {
    $('#save-idea').click( (event) => {
        event.preventDefault()
        var ideaParams = {
            title: $titleField.val(),
            body:  $bodyField.val()
        }

        $.post('/api/v1/ideas', ideaParams)
            .then(clearFields())
            .then(clearIdeas())
            .then(fetchIdeas())
            .fail(xhr => alert(xhr.responseText));
        })
}

var clearFields = () => {
    $titleField.val("")
    $bodyField.val("")
}
