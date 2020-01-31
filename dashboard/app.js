$(document).ready(function(){
    $('.menu').on('click',function(){
        $(".sidebar").toggleClass('active')
        $(".mainContent").toggleClass("active-content")
    });
    $('[data-toggle="tooltip"]').tooltip()
})