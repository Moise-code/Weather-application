const form = document.querySelector('.change-location');
const card = document.querySelector('.card');
const cardDetails = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const error = document.querySelector('.texto');
const success = document.querySelector('.success')
const localSuccess = document.querySelector('.success')


const showError = () =>{
    error.style.visibility = "visible";
    error.classList.add('open');
}
setTimeout("showError()", 1500)

const hideError = () =>{
    error.style.visibility = "hidden";
    error.classList.add('close');
}
setTimeout("hideError()", 4000);

const showSuccess = () => {
    success.style.visibility = "visible";
    success.classList.add("open");
  };
  
  const hideSuccess = () => {
    success.style.visibility = "hidden";
    success.classList.add("close");
  };

  const localSuccessfull = () =>{
    localSuccess.style.visibility = "visible";
    localSuccess.classList.add(open)
  } 
  const localStorageError = () =>{
    localSuccess.style.visibility = "visible";
    localSuccess.classList.add('close');
  }
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

    // updating the night/day & icon images

let iconsrc = `img/icons/${weather.WeatherIcon}.svg`

let timesrc = weather.IsDayTime? 'img/day.svg' : 'img/night.svg';
time.setAttribute('src', timesrc);

    //remove the d-none class

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

    // set localStorage

    localStorage.setItem('city', city);
        
  setTimeout("showSuccess()", 1000);
  showSuccess();
  setTimeout("hideSuccess()", 4000);
  hideSuccess();
});
if(localStorage.getItem('city')){
    updateCity(localStorage.getItem('city'))
    .then(data =>{
        updateUi(data);
    }).catch(error =>{
console.log(error);
    })
}