import { City, Weather, CityWeather } from './types';

// Alberta cities data
export const cities: City[] = [
  {
    id: 1,
    name: 'Edmonton',
    latitude: 53.5461,
    longitude: -113.4938
  },
  {
    id: 2,
    name: 'Calgary',
    latitude: 51.0447,
    longitude: -114.0719
  },
  {
    id: 3,
    name: 'Red Deer',
    latitude: 52.2681,
    longitude: -113.8112
  },
  {
    id: 4,
    name: 'Lethbridge',
    latitude: 49.6956,
    longitude: -112.8451
  },
  {
    id: 5,
    name: 'Fort McMurray',
    latitude: 56.7264,
    longitude: -111.3803
  }
];

// Mock weather data since we don't have a real API
export const mockWeatherData: Weather[] = [
  {
    temperature: 22,
    condition: 'Sunny',
    humidity: 45,
    windSpeed: 10,
    icon: '☀️'
  },
  {
    temperature: 18,
    condition: 'Partly Cloudy',
    humidity: 55,
    windSpeed: 15,
    icon: '⛅'
  },
  {
    temperature: 15,
    condition: 'Cloudy',
    humidity: 65,
    windSpeed: 12,
    icon: '☁️'
  },
  {
    temperature: 12,
    condition: 'Rainy',
    humidity: 80,
    windSpeed: 20,
    icon: '🌧️'
  },
  {
    temperature: 5,
    condition: 'Snowy',
    humidity: 75,
    windSpeed: 25,
    icon: '❄️'
  }
];

// Mock API function to get weather data
export const getWeatherForCity = (cityId: number): Promise<CityWeather> => {
return new Promise((resolve) => {
setTimeout(() => {
const city = cities.find(c => c.id === cityId);
// Just for demo purposes, use the same index for weather
const weatherIndex = (cityId - 1) % mockWeatherData.length;
const weather = mockWeatherData[weatherIndex];

// Get current time
const date = new Date();
// For demo, we'll just use local time
const timeString = date.toLocaleTimeString('en-US', {
hour: '2-digit',
minute: '2-digit',
second: '2-digit'
});

if (city && weather) {
resolve({
city,
weather,
currentTime: timeString
});
} else {
// eslint-disable-next-line
  throw new Error('City not found');
  }
  }, 500); // Simulate network delay
  });
};