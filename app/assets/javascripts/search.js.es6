'use strict';

$(() => {
    filterIdeas();
});

let filterIdeas = () => {
    $('.search-field').keyup((event) => {
        let search = $(this).val().toLowerCase();
        let ideas = $('#ideas').children();
        ideas.removeClass('hidden');
        let toHide = ideas.filter(() => {
            let all = $(this).children('.well').text().toLowerCase();
            return !(all.includes(search));
        });
        toHide.addClass("hidden");
    });
};
