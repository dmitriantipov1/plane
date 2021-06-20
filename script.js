const reservedTickets = []

let sum = 0

$(function () {

    $('.ticket-price__num').text(sum)

    function sumTicketsPrice(ticketData) {
        let price = parseInt(ticketData.price)
        sum = sum += price
        $('.ticket-price__num').text(sum)
    }

    function subtractionTicketsPrice(ticketData){
        let price = parseInt(ticketData.price)
        sum = sum -= price
        $('.ticket-price__num').text(sum)
    }

    function addTicket(ticketData) {
        let ticket = `<div id="${ticketData.id}" class="ticket-card ">
                <div class="ticket-card__item">
                    <p class="ticket-card__option">Row:</p>
                    <p row-id="row" class="ticket-card__option--value">${ticketData.row}</p>
                </div>
                <div class="ticket-card__item">
                    <p class="ticket-card__option">Place:</p>
                    <p place-id="place" class="ticket-card__option--value">${ticketData.place}</p>
                </div>
                <div class="ticket-card__item">
                    <p class="ticket-card__option">Price:</p>
                    <p price-id="place" class="ticket-card__option--value">${ticketData.price}грн</p>
                </div>
            </div>`
        $('.tickets__wrapper').prepend(ticket)
        sumTicketsPrice(ticketData)
    }

    function removeTicket(ticketData) {
        let ticketId = ticketData.id
        $(`.ticket-card[id='${ticketId}']`).remove()
        subtractionTicketsPrice(ticketData)
    }

    $('.place').on('click', function () {
        $(this).toggleClass('reserved')
        let price = $(this).children('.place-cost').text()
        let place = $(this).attr('data-position-place')
        let row = $(this).attr('data-position-row')
        let id = $(this).attr('data-user-id')
        let ticketData = {id, place, row, price}
        reservedTickets.push(ticketData)
        $(this).is('.reserved') ? addTicket(ticketData) : removeTicket(ticketData)
    })

    $('#order-btn').on('click', function(){
        $('.ticket-card').remove()
        $('.place.reserved').addClass('disabled')
        $('.place.reserved').children('.place-cost').text('0')
        $('.ticket-price__num').text('0')
    })


})