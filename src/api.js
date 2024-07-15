export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8b62b27b30msh121709e8a2ba3b8p1fbb8ejsn98adbc1de402',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL="https://wft-geo-db.p.rapidapi.com/v1/geo";
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "1651c09c3d4e0b62be27e653db748486"; 
// try {
// 	const response = await fetch("/cities", options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }