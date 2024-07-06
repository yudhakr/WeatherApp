import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const WeatherInfo = ({ weatherData }) => {
  const { name, main, weather, visibility, wind } = weatherData;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>The weather of {name}</Text>
      <Text style={styles.text}>Feels like {main.feels_like}°C</Text>
      <Text style={styles.temperature}>{main.temp}°C</Text>
      <View style={styles.rowContainer}>
        <Image
          source={{ uri: `https://openweathermap.org/img/w/${weather[0].icon}.png` }}
          style={styles.weatherIcon}
        />
        <Text style={styles.bold}>{weather[0].main}</Text>
      </View>
      <Text style={styles.text}>{weather[0].description}</Text>
      <DataRow label="Visibility :" value={`${visibility} km`} />
      <DataRow label="Wind Speed :" value={`${wind.speed} m/s`} />
      <DataRow label="Min Temperature :" value={`${main.temp_min}°C`} />
      <DataRow label="Max Temperature :" value={`${main.temp_max}°C`} />
    </View>
  );
};

const DataRow = ({ label, value }) => (
  <View style={[styles.rowContainer, styles.marginTop20]}>
    <Text style={styles.bold}>{label}</Text>
    <Text style={styles.marginLeft15}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  marginLeft15: {
    marginLeft: 15,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
  },
  bold: {
    fontWeight: '700',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  temperature: {
    fontWeight: '700',
    fontSize: 80,
    textAlign: 'center',
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
  marginTop20: {
    marginTop: 20,
  },
});

export default WeatherInfo;
