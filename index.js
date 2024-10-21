var typed = new Typed('#element', {
    strings: ['a Frontend Developer.', 'an aspiring Web Developer.'],
    typeSpeed: 50,
    loop: true,
    backSpeed: 100,
    backDelay:100,
  });

$(document).ready(function(){
    $('#mode').on('click',function(){
        $('.main').toggleClass("light-theme");
    })
})