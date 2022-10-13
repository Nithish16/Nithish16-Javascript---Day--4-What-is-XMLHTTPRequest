// -------------Restcountries API

let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send(null);
request.onload = function () {
  const countries = JSON.parse(request.responseText);
  console.log(countries);
  //   console.log(request.responseText);
  for (var country of countries) {
    const { name, region, subregion, flag } = country;
    console.log(name, region, subregion, flag);
  }
};
