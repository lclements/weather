$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

  var markup =

"<h1>Chicago Weather Forecast</h1>" +

"<h2>Current  Conditions</h2>" +

  "<ul><li><p>It is currently " + data.currently.temperature + " degrees and " + data.currently.summary + " in Chicago. It feels like " + data.currently.apparentTemperature + ".</p></li>"
    +
  "<li><p>It is " + data.currently.temperature + " degrees but it feels like " + data.currently.apparentTemperature + ".</p></li>"
      +
  "<li><p>The high for today is " + data.daily.data[0].temperatureMax + " degrees and the low is " + data.daily.data[0].temperatureMin + ".</p></li>" +

  "<li><p>The <b>windspeed</b> is " + data.currently.windSpeed + " miles per hour, and the <b>chance of precipitation</b> is " + data.currently.precipProbability + ".</p></li></ul>"
+
"<h3>3-Day Forecast</h3>" +

"<ul><h4>Tomorrow</h4>" +

  "<ul><li>" + data.daily.data[1].summary +
  " The <b>high</b> will reach " + data.daily.data[1].temperatureMax + " degrees, while <b>feeling like</b> " + data.daily.data[1].apparentTemperatureMax + "." +
  " The <b>low</b> will reach " + data.daily.data[1].temperatureMin + " degrees, while <b>feeling like</b> " + data.daily.data[1].apparentTemperatureMin + "." +
  " We can expect the <b>windspeed</b> to be " + data.daily.data[1].windSpeed + " miles per hour, and the <b>chance of precipitation</b> is " + data.daily.data[1].precipProbability + ".</p></li></ul></ul>"
+
"<ul><h4>The Day After Tomorrow</h4>" +

      "<ul><li>" + data.daily.data[2].summary +
      " The <b>high</b> will reach " + data.daily.data[2].temperatureMax + " degrees, while <b>feeling like</b> " + data.daily.data[2].apparentTemperatureMax + "." +
      " The <b>low</b> will reach " + data.daily.data[2].temperatureMin + " degrees, while <b>feeling like</b> " + data.daily.data[2].apparentTemperatureMin + "." +
      " We can expect the <b>windspeed</b> to be " + data.daily.data[2].windSpeed + " miles per hour, and the <b>chance of precipitation</b> is " + data.daily.data[2].precipProbability + ".</p></li></ul></ul>"
+
"<ul><h4>The Day After The Day After Tomorrow</h4>" +

      "<ul><li>" + data.daily.data[3].summary +
      " The <b>high</b> will reach " + data.daily.data[3].temperatureMax + " degrees, while <b>feeling like</b> " + data.daily.data[3].apparentTemperatureMax + "." +
      " The <b>low</b> will reach " + data.daily.data[3].temperatureMin + " degrees, while <b>feeling like</b> " + data.daily.data[3].apparentTemperatureMin + "." +
      " We can expect the <b>windspeed</b> to be " + data.daily.data[3].windSpeed + " miles per hour, and the <b>chance of precipitation</b> is " + data.daily.data[3].precipProbability + ".</p></li></ul></ul>"

"<h1>You stay classy, Chicago!</h1>"



    //   "<h1>Weather Forecast for Chicago</h1>" +
     //
    //   "<h2>Current Conditions</h3>" +
    //   "It is currently " + data.currently.summary + " and the temperature is " + data.currently.temperature + " F." +
    //   "It feels like " + data.currently.apparentTemperature + " degrees and the windspeed is " + data.currently.windSpeed + " mph." +
     //
    //   "<h2>Three-Day Forecast</h2>" +
    //   "<ul><li>Tomorrow, the high will be " + data.daily.data[1].temperatureMax + " degrees." +
    //   "<li>The next day, the high will be " + data.daily.data[2].temperatureMax + " degrees." +
    //   "<li>Three days from now, the high will be " + data.daily.data[3].temperatureMax + " degrees.</ul>" +
     //
    //   "<h2>Seven-Day Forecast</h2" +
    //   "<ul><li>" + data.daily.summary
     //
    //  "<p></p><p><h4>The current weather is  " + data.currently.summary + " and it is " + data.currently.apparentTemperature + " degrees</p></h4>" + data.currently.icon +
    //  " </p><p>The 3-day forecast is: <ul><li><strong>Day 1:</strong> " + data.daily.data[1].summary + "There will be a high of " + data.daily.data[1].temperatureMax + " and a low of " + data.daily.data[1].temperatureMin +
    //  "<li><strong>Day 2:</strong> " + data.daily.data[2].summary + "There will be a high of " + data.daily.data[2].temperatureMax + " and a low of " + data.daily.data[2].temperatureMin +
    //  "<li><strong>Day 3:</strong> " + data.daily.data[3].summary + " There will be a high of " + data.daily.data[3].temperatureMax + " and a low of " + data.daily.data[3].temperatureMin +
    //  "</ul> </p>"
     //

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
