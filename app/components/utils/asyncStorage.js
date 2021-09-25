import AsyncStorage from '@react-native-async-storage/async-storage';

export default {
    async saveItem(key, value) {
        try {
          await AsyncStorage.setItem(key, JSON.stringify(value))
          console.log(key, JSON.stringify(value))
          return true
        } catch (error) {
          return false
        }
    }, 
    async getItem(key) {
        try{
            const item = await AsyncStorage.getItem(key)
            console.log(item)
            return JSON.parse(item)
        } catch (error) { }
        return;
    },
    async removeItem(key) {
        try{
            await AsyncStorage.removeItem(key)
            return true
        } catch (error) {
            return false
        }
    },
}