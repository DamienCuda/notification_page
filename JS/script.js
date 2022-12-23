document.addEventListener('DOMContentLoaded', function(){

    //Variables
    var notification_counter = document.querySelector('#notifications_counter');
    var unread_notifications = document.querySelectorAll('.unread');
    var mark_all_btn = document.querySelector('#read_all');

    //Set notification counter on page load
    unread_notification_counter = unread_notifications.length
    notification_counter.textContent = unread_notification_counter;

    //When mark all btn click, clear counter and remove unread classes
    mark_all_btn.addEventListener('click',() =>{
        notification_counter.textContent = '0';
        unread_notifications.forEach((e) =>{
            e.classList.remove('unread');
        })
    })

    // When notification click, remove unread class & update counter    
    unread_notifications.forEach((e) =>{
        e.addEventListener('click', () =>{
            e.classList.remove('unread');
            unread_notification_counter -= 1;
            notification_counter.textContent = unread_notification_counter;
        })
    })
});