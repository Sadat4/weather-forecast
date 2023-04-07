function retriveinformation() {

    var fornewName = document.getElementById("InputCity");
    var NameofCity = document.getElementById("NameofCity");
    NameofCity.innerHTML = fornewName.value;

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+fornewName.value+'&appid=aea86e4a344efb78c82d7133a1231172')
.then(response => response.json())
.then(data => {

    //grabing the min and max values for each day
    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min);
        
    }

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max);
    }
    //------------------------------------------------------------

    //Getting Weather Icons
     for(i = 0; i<5; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[i].weather[0].icon
        +".png";
    }
    //------------------------------------------------------------
    console.log(data)


})

.catch(err => alert("Please check Your Internet Coneciton"))
}

function DefaultScreen(){
    document.getElementById("cityInput").defaultValue = "Denver";
    retriveinformation();
}


//weeks of the day
var d = new Date();
var week_d = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//Function for grabing index of the days array
function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = week_d[CheckDay(i)];
    }