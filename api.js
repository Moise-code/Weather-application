// now we are going to bundle everything in the class
// we are first group all the api keys we used in the class then this class Groupapi will have the methods
// which are in our case updateCity, getCity, getWeather.
class Groupapi{
   constructor(){   
    this.Key = 'sCUNr9If9amuAkGGmxeQFgVxdiTCFDFA';
    this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
    this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
}
// since we are geting the 
async updateCity(city){
    const cityDets = await this.getCity(city);
    const weather = await this.getWeather(cityDets.Key);

    return{
        cityDets : cityDets,
        weather : weather
    }

}
// since we are getting the city data from the api, just know that it is the asynchronous method
// it has key api and the querry data.
// in the end which the converted to json t be understood by the javascript.
async getCity(city){
    const query = `?apikey=${this.Key}&q=${city}`;
    const response = await fetch(this.cityURI + query);
    const data = await response.json();
    return data[0];
}

// we are getting the data from the weather condition api data so it must be asyncronous method thats is why we used the async on this method.
async getWeather(citykey){
    const query = `${citykey}?apikey=${this.Key}`;
    const response = await fetch(this.weatherURI + query);
    const data = await response.json();
    return data[0];
}
}

// adding the api key for our appliication

// const Key = 'sCUNr9If9amuAkGGmxeQFgVxdiTCFDFA';

// // adding the fnction for getting the weather condition

// const getWeather = async(citykey) =>{
//     const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
//     const query = `${citykey}?apikey=${Key}`;

//     const response = await fetch(base + query);
//     const data = await response.json();
//     return data[0];
// }

// //adding the function for getting the city informations

// const getCity = async(city) =>{
//     const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//     const query = `?apikey=${Key}&q=${city}`;

//     const response = await fetch(base + query);
//     const data = await response.json();
//     return data[0];
// }