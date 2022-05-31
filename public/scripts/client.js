
$(document).ready(()=> {
  const loadTweets = function(){
    $.ajax({
      url: "/tweets",
      method: "GET", 
    }).then(data => renderTweets(data))
  }
  loadTweets();

  $( "#tweetSub" ).submit(function( event ) {
    event.preventDefault();
    
    const $text = $(this).serialize()
    let formLength = $(this).find("textarea").val().length;

    if (formLength > 140){
      $("h4").css("display", "none");
      $("h3").css("display", "block");
    } 
    else if (formLength <= 0){
      $("h4").css("display", "block");
      $("h3").css("display", "none");
    } else {
      $("h4").css("display", "none");
      $("h3").css("display", "none");
      $.post( "/tweets", $text ).then(() => {
        $('.tweet-section').empty();
        loadTweets()
      }
      )

  }
    
  });

  const renderTweets = function(tweets) {
    const section = $('.tweet-section')
    for (const i of tweets) {
      const tweetElememt = createTweetElement(i)
      section.prepend(tweetElememt);
    }
  
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  }
  
  const createTweetElement = function(tweet) {

  const $tweet = `<article class='tweet'>
    <header>
      <i>${tweet.user.name}</i>
      <i>${tweet.user.handle}</i>
    </header>
    <p>${escape(tweet.content.text)}</p>
    <footer>
      <i>${tweet.created_at}</i>
        <div id ="icons">
          <i class="fa-solid fa-flag"></i><i class="fa-solid fa-retweet"></i><i class="fa-solid fa-heart"></i>
        </div>
    </footer>
    </article>`
  
  return $tweet;
  }

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  

})
