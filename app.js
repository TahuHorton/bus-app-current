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
        this.nextDOM = document.getElementById("next")
    }

//getStops function which will show bus stops when clicked
    getStops() {
        var html = '<ul>';
        for (var i = 0; i < this.busStops.length; i++) {

            //onclick="                                  awapuni.showTimes(1)                                                 Depart MST
            html += "<li class='busStop' onclick='routes[\"" + this.name.toLowerCase() + "\"].showTimes(" + i + ")'>" + this.busStops[i] + "</li>"
        }
        html += '</ul>'
        return html
    }
//showTimes function which shows bus times when clicked. 
    showTimes(index) {
        this.routeNameDOM.innerHTML = this.name;
        this.stopDOM.innerHTML = this.busStops[index];
        this.timesDOM.innerHTML = this.getStopTimes(index);
        this.nextDOM.innerHTML = this.getNextTime(index);
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
    getNextTime(index) {
        var now = new Date ();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        
        //add zero in front of numbers <10
        minutes = this.checkTime(minutes);
        hours = this.checkTime(hours);
        now = hours+"."+minutes;
        
        for (i = 0; i < this.monFriTimes.length; i++) {
           if (now < this.monFriTimes[i][index]) {
                var next = this.monFriTimes[i][index];
                return next
            }
            
        }
             
        
//        document.getElementById('time').innerHTML = hours + ":" + minutes; 
        

        
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
    
    checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }
}
        

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
