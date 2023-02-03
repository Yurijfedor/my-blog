import { View } from "react-native"
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import LoginScreen from './Screens/auth/LoginScreen' 
import RegistrationScreen from './Screens/auth/RegistrationScreen' 
import Posts from './Screens/mainScreens/PostsScreen'
import CreatePost from './Screens/mainScreens/CreatePostsScreen'
import Profile from './Screens/mainScreens/ProfileScreen'


const AuthStack = createStackNavigator()
const MainTab = createBottomTabNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <MainTab.Navigator>
        <MainTab.Screen name='Posts' component={Posts}></MainTab.Screen>
        <MainTab.Screen name='CreatePost' component={CreatePost}></MainTab.Screen>
        <MainTab.Screen name='Profile' component={Profile}></MainTab.Screen>
      </MainTab.Navigator>
    </NavigationContainer>
  )
}


// Auth
//       <AuthStack.Navigator>
//         <AuthStack.Screen options={{headerShown: false}} name='Login' component={LoginScreen}></AuthStack.Screen>
//         <AuthStack.Screen options={{headerShown: false}} name='Registr' component={RegistrationScreen}></AuthStack.Screen>
//       </AuthStack.Navigator>
