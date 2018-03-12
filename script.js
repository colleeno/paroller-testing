console.log('linked')

$(".section-two-block").paroller({ factor: '0.3', type: 'background', direction: 'vertical' });

$(".column-one").paroller({ factor: '-0.1', type: 'foreground', direction: 'horizontal' });
$(".column-three").paroller({ factor: '0.1', type: 'foreground', direction: 'horizontal' });

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
                offset: '-50px'
            })
