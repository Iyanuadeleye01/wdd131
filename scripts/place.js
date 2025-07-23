// To calculate Windchill
const temperature = 10;

const calculateWindChill = (temp,speed) =>
    13.12 + 0.6215 * temp - 11.37 * Math.pow(speed,0.16) + 0.3965 * temp * Math.pow(speed,0.16)

// Get the Windspeed value 
const windSpeed = parseFloat(document.getElementById("wind-speed").textContent);

// Get the windchill
const windChillElement = document.getElementById("wind-value");


if (temperature <= 10 && windSpeed > 4.8){
    const windChill = calculateWindChill(temperature,windSpeed).toFixed(1);
    windChillElement.textContent = `${windChill}℃`;
}
else {
    windChillElement.textContent= `N/A`;
}











// To display the footer content
document.getElementById("currentyear").textContent = new Date().getUTCFullYear();
document.getElementById("lastmodified").textContent = "lastmodified: " + document.lastModified;