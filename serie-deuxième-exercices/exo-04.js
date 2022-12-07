let temperatureCelsius = prompt("Notez votre température en celsius")

let temperatureKelvin = parseInt(temperatureCelsius) + 273.15;
let message = "La température de " + temperatureCelsius + " °C donne " + temperatureKelvin + " en kelvin."

console.log(message);