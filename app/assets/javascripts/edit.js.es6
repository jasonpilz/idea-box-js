'use strict';

$(() => {
    updateTitle();
    updateBody();
});

let updateTitle = () => {
    $('#ideas').delegate('#title', 'keydown', function(event) {
        if (event.which == 13) {
            let $ideaID = this.attributes[3].nodeValue;
            let data = { title: this.textContent };
            event.preventDefault();
            this.blur();

            $.ajax({
                type: "PUT",
                url: '/api/v1/ideas/' + $ideaID,
                data: data,
                success: () => {},
                error: (xhr) => { alert(xhr.responseText); }
            });
        }
    });
};

let updateBody = () => {
    $('#ideas').delegate('#body', 'keydown', function(event) {
        if (event.which == 13) {
            let $ideaID = this.attributes[3].nodeValue;
            let data = { body: this.textContent };
            event.preventDefault();
            this.blur();

            $.ajax({
                type: "PUT",
                url: '/api/v1/ideas/' + $ideaID,
                data: data,
                success: () => {},
                error: (xhr) => { alert(xhr.responseText); }
            });
        }
    });
};
