console.log('linked')

$('.two-text').paroller({ factor: '0.3', type: 'foreground', direction: 'vertical' });

// $('.column-one').paroller({ factor: '-0.1', type: 'foreground', direction: 'vertical' });
$('.column-two').paroller({ factor: '0.03', type: 'foreground', direction: 'vertical' });


// $(window).on('scroll',function(){
//     parallaxScroll();
// });

function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    var faster = 0-(scrolled*.15)
    $('.section-two-block').css('background-position-y', faster+'px');
    var one = -scrolled * .08
    var three = scrolled * .08
    // $('.two-text').css('transform','translateY('+faster+'px)');
    // if (scrolled > 1000) {
  $('.column-one').css('transform','translateY('+one+'px)');
  $('.column-three').css('transform','translateY('+three+'px)');
// }
}

var waypoint = $('.section-two-block').waypoint(function(direction) {
              if (direction == 'down') {
                $('.section-one-block').addClass('hidden')
                console.log('down')
              }
              else {
                $('.section-one-block').removeClass('hidden')
                console.log('up')
              }},
              {
                offset: '-80px'
            })
