// call updateQuote once when page loads
var quote = $(".quote-content span");
var cite = $(".quote-source em");
async function updateLifeQuote() {
    // Fetch a random quote from the Quotable API
    var responseFriendship = await fetch("https://api.quotable.io/random?tags=life");
    var data = await responseFriendship.json();
    if (responseFriendship.ok) {
        // Update DOM elements
        quote.text(data.content);
        cite.text("- " + data.author);
        $('#quote').removeClass('love-quoted friendship-quoted').addClass('life-quoted');
    } else {
        location.reload();
        $('#quote').removeClass('life-quoted love-quoted friendship-quoted');
    }
}
updateLifeQuote();
setTimeout(() => {
    if ($('#quote').hasClass('life-quoted')) {
        setInterval(() => {
            updateLifeQuote();
        }, 10000);
    }
}, 10000);
$("#romance").on('click', function(){
    $('body').removeClass().addClass('default');
    $('#landing').css('transform', "none");
    $('#favicon_ico').attr('href','https://megymegs.github.io/jekyll_persuu/assets/favicon/favicon_1.ico');
    $('#favicon_png').attr('href','https://megymegs.github.io/jekyll_persuu/assets/favicon/favicon_1.png');
    $('.member_type').removeClass('d-none').siblings('.acc_type').addClass('d-none');
    async function updateLoveQuote() {
        // Fetch a random quote from the Quotable API
        var responseLove = await fetch("https://api.quotable.io/random?tags=love");
        var data = await responseLove.json();
        if (responseLove.ok) {
            // Update DOM elements
            quote.text(data.content);
            cite.text("- " + data.author);
            $('#quote').removeClass('life-quoted friendship-quoted').addClass('love-quoted');
        } else {
            location.reload();
            $('#quote').removeClass('life-quoted love-quoted friendship-quoted');
        }
    }
    updateLoveQuote();
    if ($('#quote').hasClass('love-quoted')) {
        setInterval(() => {
            updateLoveQuote();
        }, 10000);
    }
});
$("#companion").on('click', function(){
    $('body').removeClass().addClass('recreational');
    $('#landing').css('transform', "none");
    $('#favicon_ico').attr('href','https://megymegs.github.io/jekyll_persuu/assets/favicon/favicon_2.ico');
    $('#favicon_png').attr('href','https://megymegs.github.io/jekyll_persuu/assets/favicon/favicon_2.png');
    $('.member_type').removeClass('d-none').siblings('.acc_type').addClass('d-none');
    async function updateFriendshipQuote() {
        // Fetch a random quote from the Quotable API
        var responseFriendship = await fetch("https://api.quotable.io/random?tags=friendship");
        var data = await responseFriendship.json();
        if (responseFriendship.ok) {
            // Update DOM elements
            quote.text(data.content);
            cite.text("- " + data.author);
            $('#quote').removeClass('life-quoted love-quoted').addClass('friendship-quoted');
        } else {
            location.reload();
            $('#quote').removeClass('life-quoted love-quoted friendship-quoted');
        }
    }
    updateFriendshipQuote();
    if ($('#quote').hasClass('friendship-quoted')) {
        setInterval(() => {
            updateFriendshipQuote();
        }, 10000);
    }
});
$('#back').on('click', function(){
    $('#landing').css('transform', "translateY(5vw)");
    $('.acc_type').removeClass('d-none').siblings('.member_type').addClass('d-none');
    updateLifeQuote();
});
