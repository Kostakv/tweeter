$(document).ready(function() {
  $('#tweet-text').keyup(function() {
    const textVal = $(this).val()
    const textLength = textVal.length
    const remainder = 140-textLength;
    console.log(textVal,textLength)
    $('.counter').html(140-textLength)
    if (remainder < 0){
      $('.counter').addClass('red')
    } else {
      $('.counter').removeClass('red')
    }
  });
});










