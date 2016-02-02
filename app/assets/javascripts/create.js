$(() => {
    var $titleField = $('#title-field');
    var $bodyField = $('#body-field');

    bindEventsToNewIdeaForm()
})

var bindEventsToNewIdeaForm = () => {
    $('#save-idea').click( (event) => {
        event.preventDefault()
        var ideaParams = {
            // title: $titleField.val(),
            // body:  $bodyField.val()
            title: $('#title-field').val(),
            body:  $('#body-field').val()
        }

        $.post('/api/v1/ideas', ideaParams)
            .then(clearFields())
            .then(clearIdeas())
            .then(fetchIdeas())
            .fail(xhr => alert(xhr.responseText));
        })
}

var clearFields = () => {
    // $titleField.val("")
    // $bodyField.val("")
    $('#title-field').val("")
    $('#body-field').val("")
}
