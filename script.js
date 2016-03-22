// We should wait for the page to load before running our ajax request
$(document).ready(function(){
  // Now we start the Ajax Get request. The first parameter is the URL with the data.
  // The second parameter is a function that handles the response.
  $.get("html/sentence.html", function(response) {
    // Here we are getting the element on the page with the id of sentences and
    // insert the response
    $("#sentences").html(response);
  });

  var url = "https://api.github.com/repos/rails/rails/commits?sha=82885325e04d78fb7ec608a4670164d842d23078";
 
$.get(url)
  .done(function(data) {
    console.log("Done");
    console.log(data);
  });
});
