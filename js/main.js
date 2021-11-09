var walkSpeed = 3.6;
var bikeSpeed = 20.1;
var carSpeed = 70;
var planeSpeed = 800;

var elForm = document.querySelector("#form");
var elResultWalk = document.querySelector("#result_walk");
var elResultBike = document.querySelector("#result_bike");
var elResultCar = document.querySelector("#result_car");
var elResultPlane = document.querySelector("#result_plane");

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    
    var elInput = document.querySelector("#input_type").value.trim();
    if (elInput <= 0) {
    }else{
        var walk = Math.round(elInput / walkSpeed) + " soat" + " " + Math.floor(elInput / walkSpeed) + " min";

        var bike = Math.round(elInput / bikeSpeed) + " soat" + " " + Math.floor(elInput / bikeSpeed) + " min";

        var car = Math.round(elInput / carSpeed) + " soat" + " " + Math.floor(elInput / carSpeed) + " min";

        var plane = Math.round(elInput / planeSpeed) + " soat" + " " + Math.floor(elInput / planeSpeed) + " min";
    }
    
    elResultWalk.textContent = walk;
    elResultBike.textContent = bike;
    elResultCar.textContent = car;
    elResultPlane.textContent = plane;
})

