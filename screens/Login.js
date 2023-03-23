import React from 'react'
import { Text, View, Button, SafeAreaView, TextInput } from 'react-native'
import { globalStyles } from '../styles/global'
import { globalConstants } from '../configs/constants'

const LoginScreen = ({navigation}) => {
    
    const pressHandler = ()=> {
        navigation.navigate('Home')
      //  navigation.goBack('screenName') //to navigate back to a screen manually
    }

  return(
    <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>{globalConstants.AppName.name}</Text>
            <Button 
            title={'Login'}
            onPress={pressHandler}
        />

    <SafeAreaView>
        <TextInput
            style={globalStyles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
        />
    </SafeAreaView>
    </View>
  )
}

export default LoginScreen;