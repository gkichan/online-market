

$(document).ready(() => {
    const cardContainer = '.all-cards'; /// container, в котором вид .card будет переключаться

    function switchViewClick(e){
        e.preventDefault();
        let sender = $(e.currentTarget);
        let rowView = (sender.attr('data-view') && sender.attr('data-view') === 'card-row');
        $('.switch-view').removeClass('active');
        sender.addClass('active');
        if (rowView) {
           $(cardContainer + ' .card').addClass('row-card');
           $(cardContainer + ' .col-lg-4').addClass('col-lg-12 col-md-12 col-sm-12');
        }
        else {
           $(cardContainer + ' .card').removeClass('row-card');
           $(cardContainer + ' .col-lg-4').removeClass('col-lg-12 col-md-12 col-sm-12');
        }
    }

    $('.switch-view').on('click', switchViewClick);
});
