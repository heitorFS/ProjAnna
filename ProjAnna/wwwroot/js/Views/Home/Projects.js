function findCollapsible(callerId) {
    return $('div[name=' + callerId + '].card-content')[0];
}

$('.collapsible').on('click', function () {
    debugger;
    var ths = $(this);
    var card = findCollapsible(ths[0].name);

    if (card.style.display != 'block') {
        card.style.display = 'block';
        card.style.maxHeight = card.scrollHeight + 'px';
    }
    else {
        card.style.display = 'none';
        card.style.maxHeight = null;
    }
    ths.children('.button-text-container').children('.align-end').children().toggleClass('fa-plus')
    ths.children('.button-text-container').children('.align-end').children().toggleClass('fa-minus')
});