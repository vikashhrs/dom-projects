const ui = new UI();
const storage = new Storage();
const { city, state } = storage.getLocationData();
const weather = new Weather(city, state);
document.addEventListener('DOMContentLoaded', getWeather);
document.getElementById('w-change-btn').addEventListener('click', (event) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    storage.setLocationData(city, state);
    weather.changeLocation(city, state);
    getWeather();
    $('#locModal').modal('hide');
})

function getWeather() {
    weather.getWeather().then(data => {
            ui.paint(data);
        })
        .catch(error => {})
}