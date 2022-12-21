// adding the api key for our appliication

const Key = 'mHyjA5GtqVAJ9ehXjZlGvlXvkWVOKjM0';

// adding the fnction for getting the weather condition

const getWeather = async(citykey) =>{
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${citykey}?apikey=${Key}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
}

//adding the function for getting the city informations

const getCity = async(city) =>{
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${Key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
}