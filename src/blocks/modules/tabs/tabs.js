let jsTabs = $('.jsTabs');

jsTabs.each(function(){
    
    let triggers = $(this).find('.jsTabsTrigger');
    let items = $(this).find('.jsTabsItem');
    i = 1;
    e = 1;

    triggers.each(function(index, element){
        $(element).attr('data-tab', i);
        i++
    })
    items.each(function(index, element){
        $(element).attr('data-tab', e);
        e++
    })
})

$('.jsTabsTrigger').on('click', function(e){
    e.preventDefault();
    let thisGroup = $(this).closest('.jsTabs');

    let tabsItems = thisGroup.find('.jsTabsItem');
    let tabsLinks = thisGroup.find('.jsTabsTrigger');

    let thisIndex = $(this).attr('data-tab');
    // console.log(thisIndex)

    tabsLinks.removeClass('is-active');
    tabsItems.removeClass('is-active');
    
    $(this).addClass('is-active');
    thisGroup.find('.jsTabsItem[data-tab="'+ thisIndex +'"').addClass('is-active');;
})
