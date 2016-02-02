$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

  var markup =
      "<h1>Weather Forecast for Chicago</h1>" +

      "<h2>Current Conditions</h3>" +
      "It is currently " + data.currently.summary + " and the temperature is " + data.currently.temperature + " F." +
      "It feels like " + data.currently.apparentTemperature + " degrees and the windspeed is " + data.currently.windSpeed + " mph." +

      "<h2>Three-Day Forecast</h2>" +
      "<ul><li>Tomorrow, the high will be " + data.daily.data[1].temperatureMax + " degrees." +
      "<li>The next day, the high will be " + data.daily.data[2].temperatureMax + " degrees." +
      "<li>Three days from now, the high will be " + data.daily.data[3].temperatureMax + " degrees.</ul>" +

      "<h2>Seven-Day Forecast</h2" +
      "<ul><li>" + data.daily.summary

     "<p></p><p><h4>The current weather is  " + data.currently.summary + " and it is " + data.currently.apparentTemperature + " degrees</p></h4>" + data.currently.icon +
     " </p><p>The 3-day forecast is: <ul><li><strong>Day 1:</strong> " + data.daily.data[1].summary + "There will be a high of " + data.daily.data[1].temperatureMax + " and a low of " + data.daily.data[1].temperatureMin +
     "<li><strong>Day 2:</strong> " + data.daily.data[2].summary + "There will be a high of " + data.daily.data[2].temperatureMax + " and a low of " + data.daily.data[2].temperatureMin +
     "<li><strong>Day 3:</strong> " + data.daily.data[3].summary + " There will be a high of " + data.daily.data[3].temperatureMax + " and a low of " + data.daily.data[3].temperatureMin +
     "</ul> </p>"


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
