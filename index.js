const form = document.querySelector('.change-location');
const card = document.querySelector('.card');
const cardDetails = document.querySelector('.details');


// adding the function for getting updating the User interface

const updateUi = (data) =>{
    const cityDets = data.cityDets;
    const weather = data.weather;

    cardDetails.innerHTML =`
    
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg,C</span>
    </div>

    `;
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }

}

// addign the function to get the current information of the city and its condition

const updateCity = async (city) =>{

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    return{
        cityDets : cityDets,
        weather : weather
    }
}
form.addEventListener('submit', e =>{
    e.preventDefault();

    // getting the city entered in the input
    const city = form.city.value.trim();
    form.reset();
   
    updateCity(city).then(data =>{
       updateUi(data)
    }).catch(error =>{
        console.log(error);
    })
});