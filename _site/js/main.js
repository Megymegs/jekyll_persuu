// call updateQuote once when page loads
var quote = $(".quote-content span");
var cite = $(".quote-source em");
async function updateInspirationalQuote() {
    // Fetch a random quote from the Quotable API
    var responseFriendship = await fetch("https://api.quotable.io/random?tags=inspirational");
    var data = await responseFriendship.json();
    if (responseFriendship.ok) {
        // Update DOM elements
        quote.text(data.content);
        cite.text("- " + data.author);
        $('#quote').removeClass('love-quoted friendship-quoted').addClass('inspiration-quoted');
    } else {
        location.reload();
        $('#quote').removeClass('inspiration-quoted love-quoted friendship-quoted');
    }
}
updateInspirationalQuote();
setTimeout(() => {
    if ($('#quote').hasClass('inspiration-quoted')) {
        setInterval(() => {
            updateInspirationalQuote();
        }, 13000);
    }
}, 13000);
$("#romance").on('click', function(){
    $('body').removeClass().addClass('default');
    $('#favicon_ico').attr('href','https://megymegs.github.io/jekyll_persuu/assets/favicon/persuu_logo.ico');
    $('#favicon_png').attr('href','https://megymegs.github.io/jekyll_persuu/assets/favicon/favicon_1.png');
    $('body main .brand_ID a .persuu img').attr('src','https://megymegs.github.io/jekyll_persuu/assets/logo/persuu_logo.png');
    async function updateLoveQuote() {
        // Fetch a random quote from the Quotable API
        var responseLove = await fetch("https://api.quotable.io/random?tags=love");
        var data = await responseLove.json();
        if (responseLove.ok) {
            // Update DOM elements
            quote.text(data.content);
            cite.text("- " + data.author);
            $('#quote').removeClass('inspiration-quoted friendship-quoted').addClass('love-quoted');
        } else {
            location.reload();
            $('#quote').removeClass('inspiration-quoted love-quoted friendship-quoted');
        }
    }
    updateLoveQuote();
    if ($('#quote').hasClass('love-quoted')) {
        setInterval(() => {
            updateLoveQuote();
        }, 13000);
    }
});
$("#companion").on('click', function(){
    $('body').removeClass().addClass('recreational');
    $('#favicon_ico').attr('href','https://megymegs.github.io/jekyll_persuu/assets/favicon/persuu_logo_alt.ico');
    $('#favicon_png').attr('href','https://megymegs.github.io/jekyll_persuu/assets/favicon/favicon_2.png');
    $('body main .brand_ID a .persuu img').attr('src','https://megymegs.github.io/jekyll_persuu/assets/logo/persuu_logo_alt.png');
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
});
$('#landing #back').on('click', function(){
    $('.acc_type').removeClass('d-none').siblings('.member_type').addClass('d-none');
    updateInspirationalQuote();
});
