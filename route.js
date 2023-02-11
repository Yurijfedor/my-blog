import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator()

import LoginScreen from './Screens/auth/LoginScreen' 
import RegistrationScreen from './Screens/auth/RegistrationScreen' 
import { Home } from './components/home';



export const UseRoute = (isAuth) => {
  if (!isAuth) {
    return (
    <AuthStack.Navigator>
      <AuthStack.Screen options={{headerShown: false}} name='Login' component={LoginScreen}></AuthStack.Screen>
      <AuthStack.Screen options={{ headerShown: false }} name='Registr' component={RegistrationScreen}></AuthStack.Screen>
      <AuthStack.Screen options={{ headerShown: false }} name='Home' component={Home}></AuthStack.Screen>   
    </AuthStack.Navigator>
  )  
  }
  return (

    <Home/>
  )
}
