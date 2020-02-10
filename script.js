function quote() {
  //parsing JSON to strings
  $.getJSON("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json", function(a) {
    randomQuote=a.quotes[Math.floor((Math.random()*a.quotes.length))];
  $("#quote-text").html(randomQuote.quote);
  $("#quote-author").html("<cite><strong>"+ randomQuote.author + "</strong></cite>");  
});

  //changes background and buttons colors when pressing the next-quote button
  var red = (Math.floor((256-109)*Math.random()) + 100);
  var green = (Math.floor((256-109)*Math.random()) + 100);
  var blue = (Math.floor((256-109)*Math.random()) + 100);
  var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
  var colorBackground = 'rgb(' + (red + 60) + ',' + (green + 60) + ',' + (blue + 60) + ')';
  $("#next-quote").css({"backgroundColor": color, "color": "black"});
  $("#tweet").css({"backgroundColor": color, "color": "black"});
  $("body").css({"background": colorBackground});
};

//getting the next quote
$('#next-quote').on('click', quote);

//tweeting the quote
$('#tweet').on("click", function() {
  window.open("https://twitter.com/home/?status=" + "\"" + $("#quote-text").text() + "\"" + " - " + $("#quote-author").text(), '_blank');
    });

$(document).ready(function() {
  // clearing cache so that we get a new quote each time we press the button
  $.ajaxSetup({ cache: false});
  quote(); 
});