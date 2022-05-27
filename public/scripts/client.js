/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */




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

    const $text = $(this).serialize();
    if ($text.length > 140 || $text === ""){
      alert('Enter tweet less than 140 characters');
    } else {
    $.ajax({
      method: "POST",
      url: "/tweets",
      data: $text
    })
  
    
  }
    
  });

  const renderTweets = function(tweets) {
    const section = $('.tweet-section')
    for (const i of tweets) {
      const tweetElememt = createTweetElement(i)
      section.append(tweetElememt);
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
    <p>${tweet.content.text}</p>
    <footer>
      <i>${tweet.created_at}</i>
        <div id ="icons">
          <i class="fa-solid fa-flag"></i><i class="fa-solid fa-retweet"></i><i class="fa-solid fa-heart"></i>
        </div>
    </footer>
    </article>`
  
  return $tweet;
  }

})
