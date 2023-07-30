export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "88ccd5568bmsh2e4a5657d30da82p182b2cjsn023022ff5ed4",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=camaro",
    { headers: headers }
  );

  const result = await response.json();
  return result;
}
