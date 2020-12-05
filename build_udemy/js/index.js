/*------services------*/
/*不能寫$document.ready(function(){}因為他沒有onload https://stackoverflow.com/questions/2194992/jquery-is-not-defined*/
$(function(){
    new WOW().init();
});
/*------work------*/
$(function(){
    $("#work").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image'
        // other options
});
});
/*------team------*/
$(function(){
    $("#team-members").owlCarousel({
        items:3,
        autoplay:true,
        smartSpeed:700,
        loop:true /*會讓他重複播放 */
    })

});

/*------testimonial-----*/
$(function(){
    $("#customer-testimonials").owlCarousel({
        items:1,
        autoplay:true,
        smartSpeed:700,
        loop:true, /*會讓他重複播放 */
        autoplayloverPause:true
    })

});

/*------stats-counterup-plugin-----*/
$(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

/*------client------*/
$(function(){
    $("#clients-list").owlCarousel({
        items:4,
        autoplay:true,
        smartSpeed:700,
        loop:true /*會讓他重複播放 */
    })

});