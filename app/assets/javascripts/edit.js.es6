$(() => {
    updateTitle()
    updateBody()
})

var updateTitle = () => {
    $('#ideas').delegate('#title', 'keydown', function(event) {
        if (event.which == 13) {
            var $ideaID = this.attributes[3].nodeValue
            var data = { title: this.textContent };
            event.preventDefault();
            this.blur();

            $.ajax({
                type: "PUT",
                url: '/api/v1/ideas/' + $ideaID,
                data: data,
                success: function() {},
                error: (xhr) => {
                    alert(xhr.responseText);
                }
            })
        }
    })
}

var updateBody = () => {
    $('#ideas').delegate('#body', 'keydown', function(event) {
        if (event.which == 13) {
            var $ideaID = this.attributes[3].nodeValue
            var data = { body: this.textContent };
            event.preventDefault();
            this.blur();

            $.ajax({
                type: "PUT",
                url: '/api/v1/ideas/' + $ideaID,
                data: data,
                success: function() {},
                error: (xhr) => {
                    alert(xhr.responseText);
                }
            })
        }
    })
}

