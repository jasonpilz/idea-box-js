(() => {
    filterIdeas();
})

var filterIdeas = () => {
    console.log('yes by')
    $('.search-field').keyup("change", function(event) {
        console.log("keyup")
    })
}
