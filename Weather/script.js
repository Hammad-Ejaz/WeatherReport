function getWeatherReport() {
    var cityName = document.getElementById("cityInput").value;

    // replace your api key here
    var ipKey = "30bf291f603dc53a8d2042b94847ca16";
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid="+ipKey+"&units=metric",
        type: "GET",
        success: function(weatherReportData) {       
            $('#city').html(weatherReportData.name);
            $('#country').html(weatherReportData.sys.country);
            $('#main').html(weatherReportData.weather[0].main);
            $('#temprature').html(weatherReportData.main.temp);
        },
        error: function(xhr, status, error) {
            console.error("Error:", error);
        }
    });  
}