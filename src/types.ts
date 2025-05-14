export interface City {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export interface Weather {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}

export interface CityWeather {
  city: City;
  weather: Weather;
  currentTime: string;
}