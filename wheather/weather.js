function head(title="Weather App"){
    document.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>`);
}
function mid(){
    document.write(` <div class="card">
    <div class="search">
        <input type="text" placeholder="Enter city name" spellcheck="false">
        <button><img src="images/search.png"></button>
    </div>
    <div class="weather">
        <img src="images/rain.png" class="weather-icon" alt="">
        <h1 class="temp">22°C</h1>
        <h2 class="city">Ghaziabad</h2>
        <div class="details">
            <div class="col">
                <img src="images/humidity.png" alt="">
                <div>
                    <p class="humidity">50%</p>
                    <p>Humidity</p>
                </div>
            </div>
            <div class="col">
                <img src="images/wind.png" alt="">
                <div>
                    <p class="wind">15kmph</p>
                    <p>Wind Speed</p>
                </div>
            </div>
        </div>
    </div>
</div>`);
}