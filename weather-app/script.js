const weatherModule = (function () {
  let PUBLICAPIKEY = "ac1ad112abc56203a98532ba155039ba";
  let lat = null;
  let lon = null;

  async function getWeather() {
    paintLoading();
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${PUBLICAPIKEY}&units=metric`
      );
      const data = await response.json();
      console.log(data);

      const { weather, name, main } = data;
      paint(weather[0].main, weather[0].icon, name, main.temp);
    } catch (err) {
      console.log("error: ", err);
      paintError();
    }
  }

  function getLatLon() {
    if (!lat || !lon) {
      navigator.geolocation.getCurrentPosition(success, error, options);
    } else {
      getWeather();
    }
  }

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    const crd = pos.coords;
    lat = crd.latitude;
    lon = crd.longitude;
    getWeather();
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    paintError();
  }

  //DOMS
  const icon = document.getElementById("icon");
  const weather = document.getElementById("weather");
  const location = document.getElementById("location");
  const temp = document.getElementById("temp");
  const date = document.getElementById("date");
  const refetchBtn = document.getElementById("refetchBtn");

  refetchBtn.addEventListener("click", getLatLon);

  function paint(currWeather, iconCode, currLocation, mainTemp) {
    icon.src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weather.textContent = currWeather;
    temp.textContent = mainTemp + "°C";
    location.textContent = currLocation;
    date.textContent = new Date().toLocaleString();
    refetchBtn.style.visibility = "visible";
  }

  function paintError() {
    weather.textContent = "Cannot get current weather";
  }
  function paintLoading() {
    weather.textContent = "loading..";
  }

  return { getLatLon };
})();

weatherModule.getLatLon();
