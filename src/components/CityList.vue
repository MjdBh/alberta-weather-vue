<template>
  <div>
    <div v-if="error" class="error-banner">{{ error }}</div>
    
    <div v-if="loading && cityWeatherData.length === 0" class="loading">
      Loading weather data...
    </div>
    
    <div v-else-if="error && cityWeatherData.length === 0" class="error">
      <p>{{ error }}</p>
      <button @click="fetchAllCitiesData">Try Again</button>
    </div>
    
    <div v-else>
      <div class="city-list">
        <CityCard 
          v-for="cityWeather in cityWeatherData"
          :key="cityWeather.city.id"
          :cityWeather="cityWeather"
          :onRefresh="handleRefreshCity"
        />
      </div>
      
      <button 
        class="refresh-all-button"
        @click="fetchAllCitiesData"
        :disabled="loading"
      >
        {{ loading ? 'Refreshing...' : 'Refresh All Cities' }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
import { cities, getWeatherForCity } from '../data';
import { CityWeather } from '../types';
import CityCard from './CityCard.vue';

export default defineComponent({
  name: 'CityList',
  components: {
    CityCard
  },
  setup() {
    const cityWeatherData = ref<CityWeather[]>([]);
    const loading = ref(true);
    const error = ref<string | null>(null);
    let intervalId: number | null = null;

    // Function to fetch data for all cities
    const fetchAllCitiesData = async () => {
      try {
        loading.value = true;
        error.value = null;
        
        const promises = cities.map(city => getWeatherForCity(city.id));
        const results = await Promise.all(promises);
        
        cityWeatherData.value = results;
      } catch (err) {
        // eslint-disable-next-line
        console.error('Error fetching city data:', err);
        error.value = 'Failed to load weather data. Please try again later.';
      } finally {
        loading.value = false;
      }
    };

    // Function to refresh a single city
    const handleRefreshCity = async (cityId: number) => {
      try {
        const updatedCityWeather = await getWeatherForCity(cityId);
        
        cityWeatherData.value = cityWeatherData.value.map(item => 
          item.city.id === cityId ? updatedCityWeather : item
        );
      } catch (err) {
        // eslint-disable-next-line
        console.error(`Error refreshing city ${cityId}:`, err);
        error.value = `Failed to refresh data for city. Please try again later.`;
      }
    };

    // Fetch data on component mount
    onMounted(() => {
      fetchAllCitiesData();
      
      // Set up interval to update time (every minute)
      intervalId = window.setInterval(() => {
        fetchAllCitiesData();
      }, 60000);
    });
    
    // Clean up interval on component unmount
    onUnmounted(() => {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
    });

    return {
      cityWeatherData,
      loading,
      error,
      fetchAllCitiesData,
      handleRefreshCity
    };
  }
});
</script>

<style>
.city-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.loading, .error {
  text-align: center;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
}

.error button {
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  margin-top: 1rem;
}

.error-banner {
  background-color: #f8d7da;
  color: #721c24;
  padding: 0.75rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  text-align: center;
}

.refresh-all-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.refresh-all-button:hover {
  background-color: #0069d9;
}

.refresh-all-button:active {
  background-color: #0062cc;
}

.refresh-all-button:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}
</style>