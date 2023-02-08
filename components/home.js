import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SimpleLineIcons, Feather, AntDesign, MaterialIcons } from '@expo/vector-icons'; 
import { TouchableOpacity, View, } from 'react-native';

import Posts from '../Screens/mainScreens/PostsScreen'
import CreatePost from '../Screens/mainScreens/CreatePostsScreen'
import Profile from '../Screens/mainScreens/ProfileScreen'

const MainTab = createBottomTabNavigator()

const CustomTabBarButton = ({ children, onPress, accessibilityState }) => (
  <TouchableOpacity
    style={{
      justifyContent: 'center',
      alignItems: 'center'
    }}
    onPress={onPress}
  >
    <View style={{
      width: 70,
      height: 40,
      borderRadius: 20,
      backgroundColor: !accessibilityState.selected ? "#FF6C00" : "#F6F6F6"
    }}>
      {children}
    </View>
    
  </TouchableOpacity>
)



export const Home = () => {
  return (
    <MainTab.Navigator screenOptions={{tabBarStyle: {height: 83}}}>
      <MainTab.Screen
        options={{
        headerTitleAlign: 'center',
        headerRight: () => (
          <View style={{flexDirection: "row",justifyContent: "flex-end",paddingRight:10,width: 120}}>
            <TouchableOpacity
              onPress={() => console.log('Hey im centered')}
              >
              <MaterialIcons name="logout" size={30} color="#BDBDBD" />
              
            </TouchableOpacity>
        </View>
      ),
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, size, color }) => <SimpleLineIcons name="grid" size={size} color={color}/>,
        }}
        name='Posts'
        component={Posts}></MainTab.Screen>
      <MainTab.Screen
      
        options={({navigation}) => ({
          
          headerLeft: () => (
          <View style={{flexDirection: "row", justifyContent: "flex-start", paddingLeft: 20, }}>
              <TouchableOpacity
                onPress={() => {
                navigation.goBack();
              }}
              >
              <AntDesign name="arrowleft" size={24} color="#212121" />
              
            </TouchableOpacity>
        </View>
      ),
         tabBarStyle: {display: 'none'},
          headerTitleAlign: 'center',
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) =>
            (<AntDesign name="plus" size={size} color={'#fff'} focused={focused} />),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          )
        })}
        name='CreatePost'
        component={CreatePost}></MainTab.Screen>
      <MainTab.Screen
        options={{
          headerTitleAlign: 'center',
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => <Feather name="user" size={size} color={color} />,
        }}
        name='Profile'
        component={Profile}></MainTab.Screen>
    </MainTab.Navigator>
  ) 
 }
