$(function () {
    const reservedTickets = []

    $('.place').on('click', function () {
        let price = $(this).children('.place-cost').text()
        let place = $(this).attr('data-position-place')
        let row = $(this).attr('data-position-row')
        let ticketData = {place, row, price}
        reservedTickets.push(ticketData)
        $(this).addClass('reserved')
        let lastTicked = reservedTickets.pop()
        $('.tickets__wrapper').prepend(`
        <div class="ticket-card hidden">
                <div class="ticket-card__item">
                    <p class="ticket-card__option">Row:</p>
                    <p id="row" class="ticket-card__option--value">${lastTicked.row}</p>
                </div>
                <div class="ticket-card__item">
                    <p class="ticket-card__option">Place:</p>
                    <p id="place" class="ticket-card__option--value">${lastTicked.place}</p>
                </div>
                <span id="ticket-card__delete-btn" class="ticket-card__delete-btn"></span>
            </div>`)
        $('.ticket-card').removeClass('hidden')
    })

})