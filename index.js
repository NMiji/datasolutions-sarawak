$(function() {
    $('body').vegas({
        overlay: true,
        transition: 'fade', 
        transitionDuration: 4000,
        delay: 10000,
        animation: 'random',
        animationDuration: 20000,
        slides: [
        { src: 'images/slideimage1.jpg' },
        { src: 'images/slideimage2.jpg' },
        {src:'images/slideimage3.jpg'}
      ]
    });
})
        