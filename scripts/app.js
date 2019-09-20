const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {
  // destructure properties
  const { weather } = data;

  // update details template
  details.innerHTML = `
    <h5 class="my-3">${weather.name}</h5>
    <div class="my-3">${weather.weather[0].main}</div>
    <div class="display-4 my-4">
      <span>${weather.main.temp}</span>
      <span>&deg;C</span>
    </div>
  `;

  // update the night/day & icon images
  const iconSrc = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
  icon.setAttribute('src', iconSrc);
  
  const timeSrc = weather.weather[0].icon.charAt(weather.weather[0].icon.length - 1) == 'd' ? 'img/day.svg' : 'img/night.svg';
  time.setAttribute('src', timeSrc);

  // remove the d-none class if present
  if(card.classList.contains('d-none')){
    card.classList.remove('d-none');
  }
};

const updateCity = async (city) => {
  const weather = await getCity(city);
  return { weather };

};

cityForm.addEventListener('submit', e => {
  // prevent default action
  e.preventDefault();
  
  // get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // update the ui with new city
  updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
});