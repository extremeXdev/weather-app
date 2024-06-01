import React, { useCallback, useEffect, useState } from 'react';

import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
//import { SafeAreaView } from 'react-native-safe-area-context';

import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet } from 'react-native';
import { theme } from '../theme';
import { debounce } from 'lodash';

import { CalendarDaysIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { MapPinIcon } from 'react-native-heroicons/solid';
import { ScrollView } from 'react-native-gesture-handler';

import { fetchWeatherForecast, fetchLocations } from '../api/weather';
import { weatherImages } from '../constants';
import * as Progress from 'react-native-progress';
import { storeData, getData } from "../utils/asyncStorage"

export default function HomeScreen() {

  const [showSearch, toggleSearch] = useState(false);   // 'toggleSearch' replaced by 'setShowSearch'
  const [locations, setLocations]  = useState([]);
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  const handleLocation = (loc)=>{
    //console.log('location: ', loc);
    setLocations([]);
    toggleSearch(false);
    setLoading(true);

    fetchWeatherForecast({
      cityName: loc.name,
      days: '7'
    }).then(data => {
      setWeather(data);
      setLoading(false);
      storeData('city', loc.name);
      //console.log('got forecast: ', data);
    })
  }

  const handleSearch = value => {
    // fetch locations
    if(value.length>2){
      fetchLocations({cityName: value}).then(data=>{
        //console.log('got location: ', data);
        setLocations(data);
      });
    }
 }

  useEffect(()=>{
    fetchMyWeatherData();
  }, [])
 
  const fetchMyWeatherData = async () => {

    let myCity = await getData('city');
    let cityName = "Abidjan";
    if(myCity) cityName = myCity;

    fetchWeatherForecast({
      cityName,
      days: '7',
    }).then(data=> {  // data brute from api resolved by 'fetchWeatherForecast'
      setWeather(data);
      setLoading(false);
    })
  }
  
  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

  const {current, location} = weather;

  return (
    <View className="flex-1 relative">
       <StatusBar style="light"/>
       <Image blurRadius={70} source={require('../assets/images/bg.png')} className="absolute h-full w-full"/>
        
        {
          loading? (
            
            <View className='flex-1 flex-row justify-center items-center' >
              
              {/*<Progress.Bar progress={0.3} width={200} />*/}
               <Progress.CircleSnail thickness={10} size={140} color="#0bb3b2" />
              
              {/*<Text className="text-white text-4xl">Loading...</Text> */}
            </View>
          ):(

            <SafeAreaView className="flex flex-1">
                {/* Search Section */}
                <View style={{height: '7%'}} className="mx-4 relative z-50">
                    <View className="flex-row justify-end items-center rounded-full"
                      style={{backgroundColor: theme.bgWhite(0.2)}}>
                      
                      {
                          showSearch ? (
                            <TextInput
                                onChangeText={handleTextDebounce}
                                placeholder='Search City'
                                placeholderTextColor={'lightGray'}
                                className='pl-6 h-10 pb-1 flex-1 text-base text-white'
                            />
                          ): null
                      }
      
                      <TouchableOpacity
                        onPress={()=> toggleSearch(!showSearch)}
                        style={{backgroundColor: theme.bgWhite(0.3)}}
                        className='rounded-full p-3 m-1'>
      
                        <MagnifyingGlassIcon size="25" color="white"/>
                      </TouchableOpacity>
                    </View>
    
                    {
                      locations.length> 0 && showSearch ? (
                        <View className='absoute w-full bg-gray-300 top-16 rounded-3xl'>
                          {
                              locations.map((loc, index) => {
                                let showBorder = index+1 != locations.length;
                                let borderclass = showBorder ? ' border-b-2 border-b-gray-400' :'';
    
                                return (
                                  <TouchableOpacity
                                    onPress={()=> handleLocation(loc)}
                                    key={index}
                                    className={'flex-row items-center border-0 p-3 px-4 mb-1 ' +borderclass}
                                  >
                                      <MapPinIcon size="20" color="gray"/>
                                      <Text className='text-black text-lg ml-2'>{loc?.name}, {loc?.country} </Text>
                                  </TouchableOpacity>
                                );
                              })
                          }
                        </View>
                      ):null
                    }
                </View>
  
                {/* forecast section */}
                <View className="mx-4 flex justify-around flex-1 mb-2">
                  {/* Location */}
                  <Text className="text-white text-center text-2xl font-bold">
                    {location?.name},
                    <Text className="text-lg font-semibold text-gray-300">
                      {" " +location?.country}
                    </Text>
                  </Text>
                  
                  {/* Weather Image */}
                  <View className="flex-row justify-center">
                      <Image
                        //source={{uri: 'https:'+current?.condition?.icon}}  // image src come as this => //cdn.weatherapi.com/weather/64x64/day/122.png",
                        source={weatherImages[current?.condition?.text]} // weatherImages['Partly cloudy'] | weatherImages.Sunny
                        className="w-52 h-52"
                      />
                  </View>
                  
                  {/* Degree Celcius */}
                  <View className="space-y-2">
                      <Text className="text-center font-bold text-white text-6xl ml-5">
                      {current?.temp_c}&#176;
                      </Text>
                      <Text className="text-center text-white text-xl tracking-widest">
                          {current?.condition?.text}
                      </Text>
                  </View>
  
                  {/* other stats */}
                  <View className="flex-row justify-between mx-4">
                      <View className="flex-row space-x-2 items-center">
                        <Image source={require('../assets/icons/wind.png')} className='h-6 w-6'/>
                        <Text className="text-white font-semibold text-base">
                            {current?.wind_kph}km
                        </Text>
                      </View>
                      <View className="flex-row space-x-2 items-center">
                        <Image source={require('../assets/icons/drop.png')} className='h-6 w-6'/>
                        <Text className="text-white font-semibold text-base">
                          {current?.humidity}%
                        </Text>
                      </View>
                      <View className="flex-row space-x-2 items-center">
                        <Image source={require('../assets/icons/sun.png')} className='h-6 w-6'/>
                        <Text className="text-white font-semibold text-base">
                            {forecast?.forecastday?.[0]?.astro?.sunrise}
                        </Text>
                      </View>
                  </View>
                </View>
  
                {/* forecast for next days */}
                <View className="mb-2 space-y-3">
                    <View className="flex-row items-center mx-5 space-x-2">
                        <CalendarDaysIcon size="22" color="white"/>
                        <Text className="text-white text-base">Daily forecast</Text>
                    </View>
  
                    <ScrollView
                      horizontal
                      contentContainerStyle={{paddingHorizontal: 15}}
                      showsHorizontalScrollIndicator={false}>
  
                      {
                          weather?.forecast?.forecastday?.map( (item, index) => {
                            
                            let date = new Date(item.date);
                            let options = {weekday: 'long'};
                            let dayName = date.toLocaleDateString('en-US', options);
                                dayName = dayName.split(',')[0]
  
                            return(
                              <View
                                key={index}
                                className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
                                style={{backgroundColor: theme.bgWhite(0.15)}}>
                                <Image source={weatherImages[item?.day?.condition?.text]}
                                  className="h-11 w-11" />
                                <Text className="text-white"> {dayName} </Text>
                                <Text className="text-white text-xl font-semibold">
                                  {item?.day?.avgtemp_c}&#176;
                                </Text>
                              </View>
                            )
                        })
  
                      }
  
                    </ScrollView>
                </View>
            </SafeAreaView>
          )
        }

    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});


