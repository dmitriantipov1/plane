const reservedTickets = []
let sum = 0
$(function () {

    $('.ticket-price__num').text(sum)

    function sumTicketsPrice(ticketData) {

    }

    function subtractionTicketsPrice(ticketData){

    }

    function addTicket(ticketData) {
        reservedTickets.push(ticketData)
        let lastTicket = reservedTickets.pop()
        let ticket = `<div id="${lastTicket.id}" class="ticket-card ">
                <div class="ticket-card__item">
                    <p class="ticket-card__option">Row:</p>
                    <p row-id="row" class="ticket-card__option--value">${lastTicket.row}</p>
                </div>
                <div class="ticket-card__item">
                    <p class="ticket-card__option">Place:</p>
                    <p place-id="place" class="ticket-card__option--value">${lastTicket.place}</p>
                </div>
                <div class="ticket-card__item">
                    <p class="ticket-card__option">Place:</p>
                    <p price-id="place" class="ticket-card__option--value">${lastTicket.price}грн</p>
                </div>
            </div>`
        $('.tickets__wrapper').prepend(ticket)
        sumTicketsPrice(ticketData)

    }

    function removeTicket(ticketData) {
        let ticketId = ticketData.id
        $(`.ticket-card[id='${ticketId}']`).remove()
    }


    $('.place').on('click', function () {
        $(this).toggleClass('reserved')
        let price = $(this).children('.place-cost').text()
        let place = $(this).attr('data-position-place')
        let row = $(this).attr('data-position-row')
        let id = $(this).attr('data-user-id')
        let ticketData = {id, place, row, price}
        $(this).is('.reserved') ? addTicket(ticketData) : removeTicket(ticketData)
    })


})