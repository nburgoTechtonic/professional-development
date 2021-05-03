// Challenge can be found here: https://www.codewars.com/kata/56a32dd6e4f4748cc3000006/javascript

function mean(town, strng) {
  const cityData = getCityData(town, strng);
  if (cityData.length < 1) return -1;
  const rainfallTotal = cityData.reduce((acc, rainfall) => acc + Number(rainfall), 0);
  return rainfallTotal / cityData.length;
}

function variance(town, strng) {
  const cityData = getCityData(town, strng);
  if (cityData.length < 1) return -1
  const rainfallMean = mean(town, strng);
  const sumSquaredDifference = cityData.reduce((acc, rainfall) => {
    return acc + Math.pow(Number(rainfall) - rainfallMean, 2);
  }, 0);
  return sumSquaredDifference / cityData.length;
}

const getCityData = (town, strng) => {
  const cityData = strng.split("\n").find(city => city.split(":")[0] === town);
  if (cityData) {
    return cityData.replace(/[^0-9\.,]+/g, "").split(',');
  }
  return [];
};