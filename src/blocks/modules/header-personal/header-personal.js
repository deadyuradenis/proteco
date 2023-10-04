let userMenuTrigger = $('.jsUserMenuTrigger');
let userMenu = $('.jsUserMenu');
let notificationsTrigger = $('.jsNotificationsTrigger');
let notificationsMenu = $('.jsNotificationsMenu');
let notificationsContent = $('.jsNotificationsContent');


userMenuTrigger.on('click', function(){
    userMenu.toggleClass('is-active');
})

notificationsTrigger.on('click', function(){
    notificationsMenu.toggleClass('is-active');
    if ($(window).width() < 768){
        $('.body').toggleClass('_lock')
    }
})

$(document).click( function(e){
    if(userMenu.hasClass('is-active')){
        if(!userMenu.is(e.target) && userMenu.has(e.target).length === 0 && !userMenuTrigger.is(e.target) && userMenuTrigger.has(e.target).length === 0){
            userMenu.removeClass('is-active');
        } 
    }
    if(notificationsMenu.hasClass('is-active')){
        if(!notificationsContent.is(e.target) && notificationsContent.has(e.target).length === 0 && !notificationsTrigger.is(e.target) && notificationsTrigger.has(e.target).length === 0){
            notificationsMenu.removeClass('is-active');
            if ($(window).width() < 768){
                $('.body').removeClass('_lock')
            }
        } 
    }
});

