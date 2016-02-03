$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

  var markup =

"<h1>Chicago Weather Forecast</h1>" +

"<h3>Current  Conditions</h3>" +

  "<ul><li><p>It is currently " + data.currently.temperature + "F and " + data.currently.summary + " in Chicago. It feels like " + data.currently.apparentTemperature + "F.</p></li>"
    +
  "<li><p>The expected high is " + data.daily.data[0].temperatureMax + "F and the low is " + data.daily.data[0].temperatureMin + "F.</p></li>" +

  "<li><p>There is a " + data.currently.precipProbability + "% chance of precipitation.</p></li></ul>"
+
"<h3>Three Day Forecast</h3>"
+
  "<ul><h4>Tomorrow</h4>"
+
      "<ul><li><p>" + data.daily.data[1].summary + " A high of " + data.daily.data[1].temperatureMax + "F is expected with a low of " + data.daily.data[1].temperatureMin + "F.</p></li>" +
      "<li><p>There is a " + data.daily.data[1].precipProbability + "% chance of precipitation.</p></li></ul></ul>"
+
  "<ul><h4>The Next Day</h4>" +

      "<ul><li><p>" + data.daily.data[2].summary + " A high of " + data.daily.data[2].temperatureMax + "F is expected with a low of " + data.daily.data[2].temperatureMin + "F.</p></li>" +
      "<li><p>There is a " + data.daily.data[2].precipProbability + "% chance of precipitation.</p></li></ul></ul>"
+
"<ul><h4>The Day After That</h4>" +

      "<ul><li><p>" + data.daily.data[3].summary + " A high of " + data.daily.data[3].temperatureMax + " F is expected with a low of " + data.daily.data[3].temperatureMin + " F.</p></li>" +
      "<li><p>There is a " + data.daily.data[3].precipProbability + "% chance of precipitation.</p></li></ul></ul>"


    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
