import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import CustomTextInput from './customTextInput';

const WeatherSearch = ({ searchWeather }) => {
    const [location, setLocation] = useState('');

    const handleSearch = () => {
        searchWeather(location);
    };

    return (
        <View>
            <CustomTextInput
                placeholder="Search the weather of your city"
                text={location}
                onChange={setLocation}
            />
            <View style={styles.buttonWrapper}>
                <Button title="Search" onPress={handleSearch} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonWrapper: {
        marginTop: 20,
    },
});

export default WeatherSearch;
