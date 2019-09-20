const key = 'a48e7ce6104623b154e97024ce0b260b';

// get city information
const getCity = async (city) => {

  const base = 'http://api.openweathermap.org/data/2.5/weather';;
  const query = `?q=${city}&units=metric&appid=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  console.log(data);
  return data;

};