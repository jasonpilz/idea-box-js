$(() => {
    filterIdeas();
})

var filterIdeas = () => {
    $('.search-field').keyup(function(event) {
        var search = $(this).val().toLowerCase();
        var ideas = $('#ideas').children();
        ideas.removeClass('hidden');
        var toHide = ideas.filter(function() {
            var all = $(this).children('.well').text().toLowerCase();
            return !(all.includes(search));
        })
        toHide.addClass("hidden");
    })
}
