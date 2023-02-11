import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DefaultPostsScreen from "../nestedScreens/DefaultScreenPosts";
import Comment from "../nestedScreens/CommentsScreen";
import Map from "../nestedScreens/MapScreen";

const NestedScreen = createStackNavigator()

const Posts = () => {
  
  return (
    <NestedScreen.Navigator screenOptions={{headerShown: false}}>
      <NestedScreen.Screen name="DefaultScreen" component={DefaultPostsScreen}></NestedScreen.Screen>
      <NestedScreen.Screen name="Comment" component={Comment}></NestedScreen.Screen>
      <NestedScreen.Screen name="Map" component={Map}></NestedScreen.Screen>
    </NestedScreen.Navigator>
  );
};

export default Posts;