import React from 'react';

import {View, Text, SafeAreaView, TextInput} from 'react-native';
//import { SafeAreaView } from 'react-native-safe-area-context';

import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet } from 'react-native';
import { theme } from '../../theme';

export default function HomeScreen() {
  return (
    <View className="flex-1 relative">
       <StatusBar style="light"/>
       <Image blurRadius={70} source={require('../../assets/images/bg.png')} className="absolute h-full w-full"/>

       <SafeAreaView className="flex flex-1">
          {/* Search Section */}
          <View style={{height: '7%'}} className="mx-4 relative z-50">
              <View className="flex-row justify-end items-center rounded-full" style={{backgroundColor: theme.bdwhite(0.2)}}>

              </View>
          </View>
       </SafeAreaView>
      
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
