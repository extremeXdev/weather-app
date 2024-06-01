
import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
    try {
    /*
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('my-key', jsonValue);
    */

      await AsyncStorage.setItem(key, value);
    } catch (e) {
      // saving error
      console.log("Error retrieving value: ", error);
    }
  };

export const getData = async (key) => {
    try {
      /*
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
      */

      const value = await AsyncStorage.getItem(key);    // accessing by key
      return value; // getting the value

    } catch (error) {
      // error reading value
      console.log("Error retrieving value: ", error);
    }
  };
