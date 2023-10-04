let accordiontriggers = $('.jsAccordionTrigger');

accordiontriggers.on('click', function(){
    let accordion = $(this).closest('.jsAccordion');
    accordion.toggleClass('is-open');
    $('.jsAccordion').not($(this).closest('.jsAccordion')).removeClass('is-open');
    $('.jsAccordion').each(function(){
         if( $(this).hasClass('is-open')){
            $(this).find('.jsAccordionBody').slideDown();
        } else {
            $(this).find('.jsAccordionBody').slideUp();
        }
    })
})

function accordionOpen(){
    $('.jsAccordionTrigger').first().click()
}

accordionOpen();