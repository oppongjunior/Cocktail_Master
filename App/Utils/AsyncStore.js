const {
  default: AsyncStorage,
} = require("@react-native-async-storage/async-storage");

export const async_store = async (key, data) => {
  try {
    await AsyncStorage.setItem(key,JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

export const async_load = async (key) => {
  try {
    const fetch = await AsyncStorage.getItem(key);
    if (fetch) {
      return await JSON.parse(fetch);
    }
    return null;
  } catch (error) {
    return null;
  }
};
