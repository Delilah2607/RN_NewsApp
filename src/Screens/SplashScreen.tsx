import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SplashScreen = ({navigation}:any) => {
    useEffect(() => {
        const CheckedUser= async ()=>{
            const user=await AsyncStorage.getItem("user")
            if (!user) {
                navigation.replace("Login")
                return;
            
            }
            navigation.navigate("welcome")
        }
        //llamamos 
        CheckedUser()
    }, [])
    
  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen