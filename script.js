let ville = "rouen";
recevoirTemperature(ville);

let form = document.getElementById('weather-form');
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    ville = document.querySelector('.weather-input').value;
    recevoirTemperature(ville);
});

function recevoirTemperature(ville) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=eb3e55ca0093756f2541d5ad27c5021c&units=metric';

    fetch(url)
     .then(response => {
        if (!response.ok) {
            throw new Error('Un problème est intervenu');
        }
        return response.json();
     })
     .then(data => {
        let villeName = data.name;
        let temperature = data.main.temp;
        document.querySelector('.weather-info').innerHTML = `<p>Ville: ${villeName}</p><p>Température: ${temperature}°C</p>`;
     })
     .catch(error => {
        alert(error.message);
     });
}
