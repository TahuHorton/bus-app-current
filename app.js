//Array for list of bus routes

var buses = [
     "awapuni",
     "rugby",
     "highbury",
     "takaro",
     "cloverlea",
     "milson",
     "rhodes",
     "roslyn",
     "rangiora",
     "brightwater",
     "fernlea",
     "heights"
];

//CLASS
class Bus {
    //the different properties that Bus objects should have
    constructor(name, stops, stopCoordinates, colour, monFriTimes, friTimes, satTimes, sunTimes) {
        this.name = name;
        this.busStops = stops;
        this.stopCoordinates = stopCoordinates;
        this.colour = colour;
        this.monFriTimes = monFriTimes;
        this.satTimes = satTimes;
        this.sunTimes = sunTimes;
        this.routeNameDOM = document.getElementById("route")
        this.stopDOM = document.getElementById("stop")
        this.timesDOM = document.getElementById("times")
    }

//getStops function which will show bus stops when clicked
    getStops() {
        var html = '<ul>';
        for (var i = 0; i < this.busStops.length; i++) {

            //onclick="                                  awapuni.showTimes(1)                                                 Deaprt MST
            html += "<li class='busStop' onclick='routes[\"" + this.name.toLowerCase() + "\"].showTimes(" + i + ")'>" + this.busStops[i] + "</li>"
        }
        html += '</ul>'
        return html
    }
//showTimes function which shows bus times when clicked. 
    showTimes(index) {
        this.routeNameDOM.innerHTML = this.name;
        this.stopDOM.innerHTML = this.busStops[index];
        //this.createMarker(index);
        this.timesDOM.innerHTML = this.getStopTimes(index)
    }
    //getStopTimes function
    getStopTimes(index) {
        
        var contentString = "<ul>";
        for (var i = 0; i < this.monFriTimes.length; i++) {
            contentString += "<li>" + this.monFriTimes[i][index].toFixed(2) + "</li>"
            
        }
        return contentString
    }
    //Provides the times of when the next bus will next come.
    getNextTime() {
    var now = new Date ()
    //1: Get times now
    //2: Convert it to a format that you can easliy compare to our next bus time eg. 11.15
    //Hint: Search "Get time as hh.mm'
    //3: Loop over the stop times to findthe next bus time
    //Hint: if (now< this.monFriTimes[i][index]) {var nextBus = } 
        // var nextBus = this.monFriTimes[i][index];
        // console.log
   // }
   //
        
    }
}
        




//OBJECTS

//var awapuni = new Bus("Awapuni", awapuniStops, colours[0], awapuniTimesMonFri, awapuniTimesFri, awapuniTimesSat, awapuniTimesSun);
//var rugby = new Bus("Rugby", rugbyStops, colours[1], rugbyTimesMonFri, rugbyTimesFri, rugbyTimesSat, rugbyTimesSun)
//var highbury = new Bus("Highbury", highburyStops, colours[2], highburyTimesMonFri, highburyTimesFri, highburyTimesSat, highburyTimesSun)
//var takaro = new Bus("Takaro", takaroStops, colours[3], takaroTimesMonFri, takaroTimesFri, takaroTimesSat, takaroTimesSun)
//var cloverlea = new Bus("Cloverlea", cloverleaStops, colours[4], cloverleaTimesMonFri, cloverleaTimesFri, cloverleaTimesSat, cloverleaTimesSun)
//var milson = new Bus("Milson", milsonStops, colours[5], milsonTimesMonFri, milsonTimesFri, milsonTimesSat, milsonTimesSun)
//var rhodes = new Bus("Rhodes", rhodesStops, colours[6], rhodesTimesMonFri, rhodesTimesFri, rhodesTimesSat, rhodesTimesSun)
//var roslyn = new Bus("Roslyn", roslynStops, colours[7], roslynTimesMonFri, roslynTimesFri, roslynTimesSat, roslynTimesSun)
//var rangiora = new Bus("Rangiora", rangioraStops, colours[8], rangioraTimesMonFri, rangioraTimesFri, rangioraTimesSat, rangioraTimesSun)
//var brightwater = new Bus("Brightwater", brightwaterStops, colours[9], brightwaterTimesMonFri, brightwaterTimesFri, brightwaterTimesSat, brightwaterTimesSun)
//var fernlea = new Bus("Fernlea", fernleaStops, colours[10], fernleaTimesMonFri, fernleaTimesFri, fernleaTimesSat, fernleaTimesSun)
//var heights = new Bus("Heights", heightsStops, colours[11], heightsTimesMonFri, heightsTimesFri, heightsTimesSat, heightsTimesSun)

//LOOP TO CREATE OBJECTS
var routes = {};
for (var i = 0; i < buses.length; i++){
    var name = buses [i]
    
    var newRoute = new Bus(
        name,
        data.stops[name],
        data.stopCoordinates[name],    
        data.colors[name],
        data.timesMonFri[name],
        data.timesFri[name],
        data.timesSat[name],
        data.timesSun[name],
    );
        
    routes[name] = newRoute;
}


//JQUERY STUFF
$(document).ready(function () {

    $(".stopsMenu").hide();

    $(".bus h2").click(function () {
        $("#" + this.id + "Stops").html(routes[this.id].getStops());
        $("#" + this.id + "Stops").slideToggle();
    })
    //JQUERY STUFF
    var TheSquare = {
        lat: -40.353005,
        lng: 175.610677
    }
    
    //Create a new Map object
    window.map = new google.maps.Map(document.getElementById('map'), {
          center: TheSquare,
          zoom: 13
        });

    
    
    
    
    

});
