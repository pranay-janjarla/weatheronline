const searchAndUpdateData=()=>{
const searchInput = document.getElementById("location-search");
fetch(
    `https://api.weatherapi.com/v1/current.json?q=${searchInput.value}&key=dea14cb83272447897d190216230309`)
    .then((response) => response.json())
    .then((data)=>{
      if(data.error){
        searchInput.value=""
;        alert(data.error.message);
      }
const temperatureSpan = document.getElementById("temperature");
temperatureSpan.innerText=data.current.temp_c;
searchInput.value="";
console.log(data);
});
};
