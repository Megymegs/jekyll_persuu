// call updateQuote once when page loads
var quote = $(".quote-content span");
var cite = $(".quote-source em");
async function updateFriendshipQuote() {
    // Fetch a random quote from the Quotable API
    var responseFriendship = await fetch("https://api.quotable.io/random?tags=friendship");
    var data = await responseFriendship.json();
    if (responseFriendship.ok) {
        // Update DOM elements
        quote.text(data.content);
        cite.text("- " + data.author);
        $('#quote').removeClass('inspiration-quoted love-quoted').addClass('friendship-quoted');
    } else {
        location.reload();
        $('#quote').removeClass('inspiration-quoted love-quoted friendship-quoted');
    }
}
updateFriendshipQuote();
if ($('#quote').hasClass('friendship-quoted')) {
    setInterval(() => {
        updateFriendshipQuote();
    }, 13000);
}
$('#landing #back').on('click', function(){
    $('.acc_type').removeClass('d-none').siblings('.member_type').addClass('d-none');
    updateFriendshipQuote();
});
