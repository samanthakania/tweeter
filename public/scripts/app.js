/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function(){
function renderTweets(tweets) {
  tweets.forEach(function(element){
 //   console.log('go');
  const createTweet = createTweetElement(element);
  $(".all-tweets").append(createTweet);
  });
}

function createTweetElement(tweet) {
  const pullTweets = $("<section class='tweet-container'>").append(`
    <article>
        <header>
          <img class="iconOne" src=${escape(tweet.user.avatars.small)}>
          <h1 class="name">${escape(tweet.user.name)}</h1>
          <p class="handle">${escape(tweet.user.handle)}</p>
        </header>
          <p class="tweet-text">${escape(tweet.content.text)}</p>
        <footer>
          <div class="time-stamp">${escape(getTimeStamp(tweet.created_at))}</div>
          <span class="footer-icons">
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </span>
        </footer>
      </article>`);

  return pullTweets;
}


function getTimeStamp(time){
  const date = new Date(time*1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  return formattedTime;
}

function getTimeStamp(time){
  var a = new Date(time*1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var month = months[a.getMonth()];
  var date = a.getDate();
  var newTime = date + ' ' + month;
  return newTime;
}

$('#tweet-form').on('submit', function(event){
  event.preventDefault();
  console.log($(this).serialize());

  $(".alert").slideUp("fast");

  let tweetLength = $('#countingchar').val().length;

  if(tweetLength > 140){
    $(".alert").text("Tweet must be less than 140 characters.");
    $(".alert").slideDown("fast");
  } else if(tweetLength === 0){
    $(".alert").text("Please enter tweet.");
    $(".alert").slideDown("fast");
  } else {
     $.post( "/tweets", $(this).serialize())
     .done(function(data, status){
     console.log(status)
     location.reload();
  });
  }
});

function loadTweets(){
  $.ajax('/tweets', {method: "GET"})
    .then(function(tweet){
      renderTweets(tweet)
    })
}

loadTweets();

function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

$(".compose-button").click(function() {
  $(".new-tweet").slideToggle("slow", function() {
    $(".textbox").focus();
  });
});

});