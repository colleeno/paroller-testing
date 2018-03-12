console.log('linked')

$('.two-text').paroller({ factor: '0.3', type: 'foreground', direction: 'vertical' });

$(".column-one").paroller({ factor: '-0.1', type: 'foreground', direction: 'vertical' });
$(".column-three").paroller({ factor: '0.1', type: 'foreground', direction: 'vertical' });

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
