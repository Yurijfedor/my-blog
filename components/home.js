import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { SimpleLineIcons, Feather, AntDesign, MaterialIcons } from '@expo/vector-icons'; 
import { TouchableOpacity, View, StyleSheet } from 'react-native';

import Posts from '../Screens/mainScreens/PostsScreen'
import CreatePost from '../Screens/mainScreens/CreatePostsScreen'
import Profile from '../Screens/mainScreens/ProfileScreen'

const MainTab = createBottomTabNavigator()

const CustomTabBarButton = ({ children, onPress}) => (
  <TouchableOpacity
    style={styles.centerStyle}
    onPress={onPress}
  >
    <View style={styles.createButton}>
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
          <View style={styles.headerRight}>
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
            <View style={styles.headerLeft}>
              <TouchableOpacity
                onPress={() => {navigation.goBack()}}
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
        component={Profile}>
        
      </MainTab.Screen>
    </MainTab.Navigator>
  ) 
}
 
const styles = StyleSheet.create({
  centerStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  createButton: {
    width: 70,
      height: 40,
      borderRadius: 20,
      backgroundColor: "#FF6C00"
  },
  headerRight: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 10,
    width: 120
  },
  headerLeft: {
    lexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 20, 
  }
})
