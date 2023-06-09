const API_KEY = `5801ae6e2df53735cd724377769f2447`;
const search = document.getElementById("search");
const result = document.querySelector(".result");

const getWeather = async (city) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url, {
      mode: "cors",
    });
    const data = await response.json();
    search.value = "";
    showResult(data);
  } catch (err) {
    console.log(err);
  }
};

const showResult = (data) => {
  if (data.cod === "404") {
    result.innerHTML = "";
    const errorMsg = document.createElement("p");
    errorMsg.classList.add("errorMsg");
    errorMsg.innerText = "City weather not found!!";
    result.appendChild(errorMsg);
    return;
  }

  result.innerHTML = `
    <div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather-icon" />
    </div>
    <div>
        <h2>${data.main.temp} ℃</h2>
        <h4> ${data.weather[0].main} </h4>
    </div>
    `;
};

document.addEventListener("submit", (e) => {
  search.value !== "" ? getWeather(search.value) : null;
  e.preventDefault();
});
