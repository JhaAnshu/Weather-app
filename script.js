//let city = "bangalore";
let searchInput = document.querySelector(".search-box");
let searchBtn = document.querySelector(".search-btn");




async function checkweather(city){
 
    let apiKey="6e4481d17ec067f55efd16deed6a5444";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


 let response = await fetch(`${apiUrl}`);
 let data = await response.json();

 if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".result").style.display = "none";
 }
else{
 document.querySelector(".city").innerHTML = data.name;
 document.querySelector(".temp").innerHTML = Math.round(data.main.temp -273.15) +"degree celcius";
 document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
 document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";
 document.querySelector(".error").style.display = "none";
 document.querySelector(".result").style.display = "block";
 //console.log(data);
}
}

searchBtn.addEventListener("click" , ()=>{
    checkweather(searchInput.value);
})


