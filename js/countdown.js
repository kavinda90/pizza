var countDownDate = new Date("Aug 10, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("offer-countdown").innerHTML = 
    "<div class='countdown-wrapper'>" + 
        "<div class='cd-item'>" +
            "<h2>" + days + "</h2>" +
            "<p>DAYS</p>" + 
        "</div>" + 
        "<div class='cd-item'>" +
            "<h2>" + hours + "</h2>" +
            "<p>HOURS</p>" + 
        "</div>" +
        "<div class='cd-item'>" +
            "<h2>" + minutes + "</h2>" +
            "<p>MINUTES</p>" + 
        "</div>" +
        "<div class='cd-item'>" +
            "<h2>" + seconds + "</h2>" +
            "<p>SECONDS</p>" + 
        "</div>" +
    "</div>";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("offer-countdown").innerHTML = "EXPIRED";
  }
}, 1000);