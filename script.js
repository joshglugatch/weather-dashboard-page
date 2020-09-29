
// Displays Los Angeles when refreshed or open
var city = "Los Angeles"
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=16e99cc70c7cbbdcf35ae6166af0f447"
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      $(".currentCity").text(response.name +"  "+ moment().format('L'))
      $(".temp").text("Temperature: " + (response.main.temp));
      $(".humid").text("Humidity: " + (response.main.humidity));
      $(".wind").text("Wind: " + (response.wind.speed)); 
      var lat = response.coord.lat
      var lon = response.coord.lon
      var uvURL = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon +"&appid=16e99cc70c7cbbdcf35ae6166af0f447"
      $.ajax({
        url: uvURL,
        method: "GET"
      }).then(function(response) {
        $(".uvIndex").text("UV Index: " + response.value)
    });

    var dayURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=16e99cc70c7cbbdcf35ae6166af0f447"
    $.ajax({
        url: dayURL,
        method: "GET"
      }).then(function(response) {
          $("#date1").text(moment().add(1,"days").format("MMMM Do"))
          $("#icon1").attr("src", "http://openweathermap.org/img/wn/"+response.list[1].weather[0].icon+"@2x.png") 
          $("#temp1").text("Temp: " + response.list[3].main.temp)
          $("#humid1").text("Humidity: " + response.list[3].main.humidity)
          
          $("#date2").text(moment().add(2,"days").format("MMMM Do"))
          $("#icon2").attr("src", "http://openweathermap.org/img/wn/"+response.list[10].weather[0].icon+"@2x.png")
          $("#temp2").text("Temp: " + response.list[11].main.temp)
          $("#humid2").text("Humidity: " + response.list[11].main.humidity)
          
          $("#date3").text(moment().add(3,"days").format("MMMM Do"))
          $("#icon3").attr("src", "http://openweathermap.org/img/wn/"+response.list[19].weather[0].icon+"@2x.png")
          $("#temp3").text("Temp: " + response.list[19].main.temp)
          $("#humid3").text("Humidity: " + response.list[19].main.humidity)
          
          $("#date4").text(moment().add(4,"days").format("MMMM Do"))
          $("#icon4").attr("src", "http://openweathermap.org/img/wn/"+response.list[28].weather[0].icon+"@2x.png")
          $("#temp4").text("Temp: " + response.list[27].main.temp)
          $("#humid4").text("Humidity: " + response.list[27].main.humidity)
          
          $("#date5").text(moment().add(5,"days").format("MMMM Do"))
          $("#icon5").attr("src", "http://openweathermap.org/img/wn/"+response.list[37].weather[0].icon+"@2x.png")
          $("#temp5").text("Temp: " + response.list[35].main.temp)
          $("#humid5").text("Humidity: " + response.list[35].main.humidity)   
    });
});

//Display new city function
function displayCityInfo(){
    var city = $(this).attr("data-name");
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=16e99cc70c7cbbdcf35ae6166af0f447"
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          //console.log(response);
          $(".currentCity").text(response.name +"  "+ moment().format('L'))
          $(".temp").text("Temperature: " + (response.main.temp));
          $(".humid").text("Humidity: " + (response.main.humidity));
          $(".wind").text("Wind: " + (response.wind.speed)); 
          

          var lat = response.coord.lat
          var lon = response.coord.lon
          var uvURL = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon +"&appid=16e99cc70c7cbbdcf35ae6166af0f447"
          $.ajax({
            url: uvURL,
            method: "GET"
          }).then(function(response) {
              //console.log(response);
              $(".uvIndex").text("UV Index: " + response.value)
        });

        var dayURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=16e99cc70c7cbbdcf35ae6166af0f447"
        $.ajax({
            url: dayURL,
            method: "GET"
          }).then(function(response) {
              //console.log(response);

          $("#date1").text(moment().add(1,"days").format("MMMM Do"))
          $("#icon1").attr("src", "http://openweathermap.org/img/wn/"+response.list[1].weather[0].icon+"@2x.png") 
          $("#temp1").text("Temp: " + response.list[3].main.temp)
          $("#humid1").text("Humidity: " + response.list[3].main.humidity)
          
          $("#date2").text(moment().add(2,"days").format("MMMM Do"))
          $("#icon2").attr("src", "http://openweathermap.org/img/wn/"+response.list[10].weather[0].icon+"@2x.png")
          $("#temp2").text("Temp: " + response.list[11].main.temp)
          $("#humid2").text("Humidity: " + response.list[11].main.humidity)
          
          $("#date3").text(moment().add(3,"days").format("MMMM Do"))
          $("#icon3").attr("src", "http://openweathermap.org/img/wn/"+response.list[19].weather[0].icon+"@2x.png")
          $("#temp3").text("Temp: " + response.list[19].main.temp)
          $("#humid3").text("Humidity: " + response.list[19].main.humidity)
          
          $("#date4").text(moment().add(4,"days").format("MMMM Do"))
          $("#icon4").attr("src", "http://openweathermap.org/img/wn/"+response.list[28].weather[0].icon+"@2x.png")
          $("#temp4").text("Temp: " + response.list[27].main.temp)
          $("#humid4").text("Humidity: " + response.list[27].main.humidity)
          
          $("#date5").text(moment().add(5,"days").format("MMMM Do"))
          $("#icon5").attr("src", "http://openweathermap.org/img/wn/"+response.list[37].weather[0].icon+"@2x.png")
          $("#temp5").text("Temp: " + response.list[35].main.temp)
          $("#humid5").text("Humidity: " + response.list[35].main.humidity)
              
        });
    });

    
}

//create array for history

var searchHistory = ["Los Angeles"]
var get = JSON.parse(localStorage.getItem("array"))
if(get !== null){
  searchHistory = get
  renderButtons();
}

//render history buttons
function renderButtons(){
    $(".addHistory").empty();

    let newSet = new Set(searchHistory);
    searchHistory = [...newSet];

    for(var i=0; i < searchHistory.length; i++){
        var b = $("<button>");
        b.addClass("history mb-1 btn btn-primary");
        b.attr("data-name", searchHistory[i]);
        b.text(searchHistory[i])
        $(".addHistory").prepend(b);
       
    }
}


//seatch button function on click and display info on click
$(".searchBtn").on("click", function(event){
    event.preventDefault();


    var city = $("#searchCity").val();

    if(city === ""){
      return;
    }
  
    searchHistory.push(city);
    
    localStorage.setItem("array", JSON.stringify(searchHistory));

    $("#searchCity").val("")
    renderButtons();    
    
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=16e99cc70c7cbbdcf35ae6166af0f447"
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          //console.log(response);
          $(".currentCity").text(response.name +"  "+ moment().format('L'))
          $(".temp").text("Temperature: " + (response.main.temp));
          $(".humid").text("Humidity: " + (response.main.humidity));
          $(".wind").text("Wind: " + (response.wind.speed)); 
          

          var lat = response.coord.lat
          var lon = response.coord.lon
          var uvURL = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon +"&appid=16e99cc70c7cbbdcf35ae6166af0f447"
          $.ajax({
            url: uvURL,
            method: "GET"
          }).then(function(response) {
             // console.log(response);
              $(".uvIndex").text("UV Index: " + response.value)
        });

        var dayURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=16e99cc70c7cbbdcf35ae6166af0f447"
        $.ajax({
            url: dayURL,
            method: "GET"
          }).then(function(response) {
              //console.log(response);

          $("#date1").text(moment().add(1,"days").format("MMMM Do"))
          $("#icon1").attr("src", "http://openweathermap.org/img/wn/"+response.list[1].weather[0].icon+"@2x.png") 
          $("#temp1").text("Temp: " + response.list[3].main.temp)
          $("#humid1").text("Humidity: " + response.list[3].main.humidity)
          
          $("#date2").text(moment().add(2,"days").format("MMMM Do"))
          $("#icon2").attr("src", "http://openweathermap.org/img/wn/"+response.list[10].weather[0].icon+"@2x.png")
          $("#temp2").text("Temp: " + response.list[11].main.temp)
          $("#humid2").text("Humidity: " + response.list[11].main.humidity)
          
          $("#date3").text(moment().add(3,"days").format("MMMM Do"))
          $("#icon3").attr("src", "http://openweathermap.org/img/wn/"+response.list[19].weather[0].icon+"@2x.png")
          $("#temp3").text("Temp: " + response.list[19].main.temp)
          $("#humid3").text("Humidity: " + response.list[19].main.humidity)
          
          $("#date4").text(moment().add(4,"days").format("MMMM Do"))
          $("#icon4").attr("src", "http://openweathermap.org/img/wn/"+response.list[28].weather[0].icon+"@2x.png")
          $("#temp4").text("Temp: " + response.list[27].main.temp)
          $("#humid4").text("Humidity: " + response.list[27].main.humidity)
          
          $("#date5").text(moment().add(5,"days").format("MMMM Do"))
          $("#icon5").attr("src", "http://openweathermap.org/img/wn/"+response.list[37].weather[0].icon+"@2x.png")
          $("#temp5").text("Temp: " + response.list[35].main.temp)
          $("#humid5").text("Humidity: " + response.list[35].main.humidity)
              
        });
    });

    
})

//render buttons when page is first loaded
renderButtons();

$(document).on("click", ".history", displayCityInfo)


























// var city = ""
// var storeArray = [];
// var getCity = localStorage.getItem("array")
// var parseCity = JSON.parse(getCity)
// //search on click button
// $(".searchBtn").on("click", function(){
//     city = $("#searchCity").val();

// var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=16e99cc70c7cbbdcf35ae6166af0f447"

//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function(response) {
//         if(city === null){
//             return;
//         }
        
//         storeArray.push(response.name) 
//         localStorage.setItem('array', JSON.stringify(storeArray))
//         getStore();
//     });

// });

//   getStore();


//   function getStore(){
// console.log(parseCity)

// for(var i=0; i < parseCity.length ; i++){
//  var b = $("<button>");
//  b.addClass("history mb-1 btn btn-primary");
//  b.text(parseCity[i]);
// $(".addHistory").prepend(b);
// }
// };

