/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function(){
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

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
          <img class="iconOne" src=${tweet.user.avatars.small}>
          <h1 class="name">${tweet.user.name}</h1>
          <p class="handle">${tweet.user.handle}</p>
        </header>
          <p class="tweet-text">${tweet.content.text}</p>
        <footer>
          <div class="time-stamp">${getTimeStamp(tweet.created_at)}</div>
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
  const date = new Date();
  const difference = date - time;
  const daysElapsed = Math.round(difference / 24 / 60 / 60 / 1000);
  return daysElapsed;
}

renderTweets(data);

});