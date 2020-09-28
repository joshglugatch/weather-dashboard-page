

function displayCityInfo(){
    var city = $(this).attr("data-name");
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=16e99cc70c7cbbdcf35ae6166af0f447"
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          console.log(response);
          $(".currentCity").text(response.name)
          $(".temp").text("Temperature: " + (response.main.temp));
          $(".humid").text("Humidity: " + (response.main.humidity));
          $(".wind").text("Wind: " + (response.wind.speed));   
      });
}




    

var searchHistory = ["Dallas","Los Angeles"]
function renderButtons(){
    $(".addHistory").empty();
    for(var i=0; i < searchHistory.length; i++){
        var b = $("<button>");
        b.addClass("history mb-1 btn btn-primary");
        b.attr("data-name", searchHistory[i]);
        b.text(searchHistory[i])
        $(".addHistory").prepend(b);
    }
}


$(".searchBtn").on("click", function(event){
    event.preventDefault();
    
    var city = $("#searchCity").val().trim();
    searchHistory.push(city);
    localStorage.setItem("array", searchHistory);
    renderButtons();
})



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

