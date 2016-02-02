$(() => {
    createIdea()
})

var createIdea = () => {
    $('#save-idea').click( (event) => {
        event.preventDefault()
        var ideaParams = {
            title: $('#title-field').val(),
            body:  $('#body-field').val()
        }

        $.ajax({
            type: "POST",
            url: "api/v1/ideas",
            data: ideaParams,
            success: (data) => {
                clearFields()
                // clearIdeas()
                // loadIdeas()
            },
            error: (xhr) => {
                alert(xhr.responseText)
            }
        })
    })
}

var clearFields = () => {
    $('#title-field').val("")
    $('#body-field').val("")
}
