<template>
  <div class="city-card">
    <h2>{{ cityWeather.city.name }}</h2>
    <div class="time-display">
      <span>Current Time:</span>
      <span class="time">{{ cityWeather.currentTime }}</span>
    </div>
    <div class="weather-display">
      <div class="weather-icon">{{ cityWeather.weather.icon }}</div>
      <div class="weather-details">
        <p class="temperature">{{ cityWeather.weather.temperature }}°C</p>
        <p class="condition">{{ cityWeather.weather.condition }}</p>
      </div>
    </div>
    <div class="weather-stats">
      <div class="stat">
        <span class="label">Humidity:</span>
        <span class="value">{{ cityWeather.weather.humidity }}%</span>
      </div>
      <div class="stat">
        <span class="label">Wind:</span>
        <span class="value">{{ cityWeather.weather.windSpeed }} km/h</span>
      </div>
    </div>
    <button 
      class="refresh-button"
      @click="onRefreshClick"
      :aria-label="`Refresh ${cityWeather.city.name} data`"
    >
      Refresh
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CityWeather } from '../types';

export default defineComponent({
  name: 'CityCard',
  props: {
    cityWeather: {
      type: Object as PropType<CityWeather>,
      required: true
    },
    onRefresh: {
      type: Function as PropType<(cityId: number) => void>,
      required: true
    }
  },
  methods: {
    onRefreshClick() {
      this.onRefresh(this.cityWeather.city.id);
    }
  }
});
</script>

<style>
.city-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 320px;
  transition: transform 0.2s ease;
}

.city-card:hover {
  transform: translateY(-5px);
}

.city-card h2 {
  margin-top: 0;
  color: #2c3e50;
}

.time-display {
  font-size: 0.9rem;
  margin-bottom: 1rem;
  color: #666;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.time {
  font-weight: bold;
}

.weather-display {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.weather-icon {
  font-size: 3rem;
  margin-right: 1rem;
}

.weather-details {
  text-align: left;
}

.temperature {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  color: #333;
}

.condition {
  margin: 0;
  color: #666;
}

.weather-stats {
  background-color: #f8f9fa;
  border-radius: 4px;
  padding: 0.8rem;
  margin-bottom: 1rem;
}

.stat {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.stat:last-child {
  margin-bottom: 0;
}

.label {
  color: #666;
}

.value {
  font-weight: bold;
  color: #333;
}

.refresh-button {
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100%;
}

.refresh-button:hover {
  background-color: #3f9142;
}

.refresh-button:active {
  background-color: #357a38;
}
</style>