let btnSearch = document.querySelector(".btn1");
let txt = document.querySelector(".text1");
let info = document.querySelector(".info");
let inputTemp = document.querySelector(".input");
let countryTxt = document.querySelector(".country");
let statusTxt = document.querySelector(".status");
let tempTxt = document.querySelector(".temp");
let minMax = document.querySelector(".minMax");
let dateTxt = document.querySelector(".date");
let infoNav = document.querySelector(".infoNav");
let poland = document.querySelector(".poland");
let egypt = document.querySelector(".egypt");
let Germany = document.querySelector(".Germany");
let canada = document.querySelector(".canada");
let mexico = document.querySelector(".mexico");
let denmark = document.querySelector(".denmark");
let modal = document.getElementById("exampleModalLong2");
let closeBtn = document.querySelector(".close");
let homeNav = document.querySelector(".homeNav");

homeNav.addEventListener("click", () => {
  location.reload();
});

poland.addEventListener("click", () => {
  inputTemp.value = "poland";
});

egypt.addEventListener("click", () => {
  inputTemp.value = "egypt";
});

Germany.addEventListener("click", () => {
  inputTemp.value = "Germany";
});

canada.addEventListener("click", () => {
  inputTemp.value = "canada";
});

mexico.addEventListener("click", () => {
  inputTemp.value = "mexico";
});

denmark.addEventListener("click", () => {
  inputTemp.value = "denmark";
});

let apiData = {
  url: "https://api.openweathermap.org/data/2.5/weather?q=",
  key: "c0c13d4bbd373147b860cd23377586b1",
};

btnSearch.addEventListener("click", () => {
  fetchData();
});

function fetchData() {
  let countryValue = inputTemp.value;

  fetch(`${apiData.url}${countryValue}&appid=${apiData.key}`)
    .then((res) => res.json())

    .then((data) => {
      console.log(data);
      showData(data);
      error(data);
    });
}

function showData(data) {
  countryTxt.innerHTML = data.name + " , " + data.sys.country;
  tempTxt.innerHTML = Number(Math.floor(data.main.temp - 273)) + "˚C";
  statusTxt.innerHTML = data.weather[0].main;

  minMax.innerHTML =
    Number(Math.floor(data.main.temp_min)) -
    273 +
    "˚C / " +
    (Number(Math.floor(data.main.temp_max)) - 273) +
    "˚C";
  dateTxt.innerHTML = showDate();
}

inputTemp.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    fetchData();
  }
});

infoNav.addEventListener("click", () => {
  txt.style.display = "block";
});

function showDate() {
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let now = new Date();

  let day = dayNames[now.getDay()];
  let month = monthNames[now.getMonth()];
  let year = now.getFullYear();
  let date = now.getDate();

  return `${day} ${date} ${month} ${year}`;
}
