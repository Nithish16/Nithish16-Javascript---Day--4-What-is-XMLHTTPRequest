// -------------Restcountries API with CountryName, Region, subRegion and Population


let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send(null);
request.onload = function () {
  const countries = JSON.parse(request.responseText);
  console.log(countries);
   for (var i = 0; i < countries.length; i++) {
    const {
      flag,
      name: { common },
      region,
      subregion,
      population,
    } = countries[i];
    console.log(flag);
    console.log(common, region, subregion, population);
  }
};

