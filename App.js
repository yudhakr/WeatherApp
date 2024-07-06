import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from './src/constant';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import WeatherSearch from './src/components/weatherSearch';
import WeatherInfo from './src/components/weatherInfo';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [status, setStatus] = useState('');

  const searchWeather = async (location) => {
    setStatus('loading');
    try {
      const response = await axios.get(`${BASE_URL}?q=${location}&appid=${API_KEY}`);
      const data = transformWeatherData(response.data);
      setWeatherData(data);
      setStatus('success');
    } catch (error) {
      console.log(error);
      setStatus('error');
    }
  };

  const transformWeatherData = (data) => {
    const transformedData = { ...data };
    transformedData.visibility = (transformedData.visibility / 1000).toFixed(2);
    transformedData.main.temp = (transformedData.main.temp - 273.15).toFixed(2);
    transformedData.main.feels_like = (transformedData.main.feels_like - 273.15).toFixed(2);
    transformedData.main.temp_min = (transformedData.main.temp_min - 273.15).toFixed(2);
    transformedData.main.temp_max = (transformedData.main.temp_max - 273.15).toFixed(2);
    return transformedData;
  };

  const renderComponent = () => {
    if (status === 'loading') {
      return <ActivityIndicator size="large" />;
    } else if (status === 'success') {
      return <WeatherInfo weatherData={weatherData} />;
    } else if (status === 'error') {
      return (
        <Text style={styles.text}>
          Something went wrong. Please try again with a correct city name.
        </Text>
      );
    }
  };

  return (
    <View style={styles.container}>
      <WeatherSearch searchWeather={searchWeather} />
      <View style={styles.marginTop20}>{renderComponent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
  },
});

export default App;
